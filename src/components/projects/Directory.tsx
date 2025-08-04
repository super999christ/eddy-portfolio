import {
  Input,
  Select,
  Option,
  Stack,
  IconButton,
  Button,
  Typography,
  Avatar,
  Box,
  Divider,
  CircularProgress,
  Chip,
} from "@mui/joy";
import React, { useEffect, useMemo, useState } from "react";
import { IoIosClose, IoIosSearch, IoIosShuffle } from "react-icons/io";
import {
  Interaction,
  interactionDetails,
  Platform,
  platformDetails,
  Project,
  rank,
} from "@/assets/Projects";
import getProjects from "@/utils/Api";
import moment from "moment";
import { CiSearch, CiWifiOff } from "react-icons/ci";
import { useMobileMode, useTabletMode } from "@/components/Responsive";
import { GoDownload } from "react-icons/go";
import { useSearchParams } from "react-router-dom";
import ProjectImageCarousel from "./ProjectImageCarousel";

function Message({
  children,
  title,
  subtitle,
}: {
  children: JSX.Element;
  title: string;
  subtitle: string;
}) {
  const mobile = useMobileMode();

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      gap={mobile ? 3 : 5}
      padding={mobile ? "2rem 3rem" : 15}
      sx={
        mobile
          ? (theme) => ({
              background: theme.palette.background.body,
              width: "100vw",
              marginX: "-1rem",
              zIndex: 1,
            })
          : undefined
      }
    >
      {children}
      <Stack
        direction="column"
        gap={0.5}
        maxWidth="25rem"
        textAlign={mobile ? "center" : "left"}
      >
        <Typography level="h3" fontSize="clamp(1.2rem, 5vw, 1.875rem)">
          {title}
        </Typography>
        <Typography level="body2">{subtitle}</Typography>
      </Stack>
    </Stack>
  );
}

function ProjectCard({
  project,
  open,
  onClick,
}: {
  project: Project;
  open: boolean;
  onClick: () => void;
}) {
  const mobile = useMobileMode();

  const footer = useMemo(
    () =>
      `${project.language ? `${project.language} project ` : "Project "}published to ${platformDetails[project.platform].label}${
        project.createdAt ? ` ${moment(project.createdAt).fromNow()}` : ""
      }${
        project.updatedAt
          ? `, updated ${moment(project.updatedAt).fromNow()}`
          : ""
      }`,
    [project]
  );

  return (
    <Stack
      id={project.title}
      direction={mobile ? "column" : "row"}
      padding={3}
      gap={3}
      onClick={() => onClick()}
      className={`${open ? "open" : ""}`}
      alignItems="stretch"
      sx={(theme) => ({
        transition: "all ease .3s",
        position: "relative",
        cursor: "pointer",
        borderRadius: "16px",
        backgroundColor: theme.palette.background.surface,
        border: "1px solid",
        borderColor: theme.palette.divider,
        overflow: "hidden",
        "&:hover, &.open": {
          borderColor: theme.palette.primary[500],
          boxShadow: theme.shadow.lg,
          transform: "translateY(-2px)",
        },
        "&.open": {
          marginY: "1rem",
        },
      })}
    >
      {/* Left side - Project Info */}
      <Stack
        gap={2}
        flex={1}
        sx={{
          minWidth: mobile ? "100%" : "300px",
        }}
      >
        <Stack direction="row" gap={1.5} alignItems="center">
          {/* <Avatar
            component="span"
            variant="soft"
            size="md"
            color="primary"
            sx={{ borderRadius: "8px" }}
          >
            {platformDetails[project.platform].icon({ size: "1.2rem" })}
          </Avatar> */}
          <Stack gap={2} flex={1}>
            <Typography level="h3" fontSize="1.25rem" lineHeight={1.2}>
              {project.title}
            </Typography>
            <Typography level="body3" textColor="text.tertiary">
              {/* {platformDetails[project.platform].sublabel} */}
              "Description"
            </Typography>
          </Stack>
        </Stack>

        <Typography
          level="body2"
          sx={{
            lineHeight: 1.6,
            "& p": {
              margin: 0,
            },
          }}
        >
          {project.description}
        </Typography>

        {/* Project Stats */}
        {/* {project.interactions && Object.keys(project.interactions).length > 0 && (
          <Stack direction="row" gap={2} flexWrap="wrap">
            {Object.entries(interactionDetails).map(([key, item]) =>
              project.interactions && Object.keys(project.interactions).includes(key) ? (
                <Stack direction="row" key={key} alignItems="center" gap={0.5}>
                  {item.icon({ size: "14px" })}
                  <Typography level="body3" fontWeight="md">
                    {project.interactions[key as Interaction]}
                  </Typography>
                </Stack>
              ) : null
            )}
          </Stack>
        )} */}

        {/* Footer info */}
        {/* <Typography level="body3" textColor="text.tertiary" marginTop="auto">
          {footer}
        </Typography> */}

        {/* Action Links */}
        <Stack direction="row" gap={1.5} flexWrap="wrap">
          <Typography
            component="a"
            href={project.demo}
            target="_blank"
            level="body2"
            fontWeight="md"
            textColor="primary.500"
            sx={{
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            View Project
          </Typography>
          {/* <Typography
            component="a"
            href={project.source}
            target="_blank"
            level="body2"
            textColor="text.secondary"
            sx={{
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Source Code
          </Typography> */}
        </Stack>
      </Stack>

      {/* Right side - Image Carousel */}
      {project.images && project.images.length > 0 && (
        <Box sx={{ flex: mobile ? "none" : 1 }}>
          <ProjectImageCarousel images={project.images} title={project.title} />
        </Box>
      )}
    </Stack>
  );
}

export default function Directory() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [openProject, setOpenProject] = useState("");

  const mobile = useMobileMode();
  const tablet = useTabletMode();

  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [platform, setPlatform] = useState<string | null>(
    searchParams.get("platform") || null
  );

  const [projects, setProjects] = useState([] as Project[]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const [filteredProjects, setFilteredProjects] = useState([] as Project[]);

  useEffect(() => {
    setLoading(true);
    getProjects()
      .then((data) => {
        setProjects(data || []);
      })
      .catch(() => {
        setError(
          new Error(
            "There was an error loading the projects. Please try again later."
          )
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (platform) params.set("platform", platform);
    setSearchParams(params);
  }, [search, platform]);

  // Update the debounced search term
  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(timeout);
  }, [search]);

  // Filtering
  useEffect(() => {
    setFilteredProjects(
      projects.filter(
        (project) =>
          (platform === null || project.platform === platform) &&
          (debouncedSearch === "" ||
            project.title
              .toLowerCase()
              .includes(debouncedSearch.toLowerCase()) ||
            project.platform
              .toLowerCase()
              .includes(debouncedSearch.toLowerCase()) ||
            project.description
              ?.toLowerCase()
              .includes(debouncedSearch.toLowerCase()) ||
            project.language
              ?.toLowerCase()
              .includes(debouncedSearch.toLowerCase()))
      )
    );

    // If the open project is not in the filtered list, close it
    if (
      openProject !== "" &&
      !projects.find((project) => project.title === openProject)
    ) {
      setOpenProject("");
    }
  }, [projects, debouncedSearch, platform]);

  // Pick a random project from the list and open it, then scroll to it
  const randomize = () => {
    const randomIndex = Math.floor(Math.random() * filteredProjects.length);
    const randomProject = filteredProjects[randomIndex];
    setOpenProject(randomProject.title);
    document.getElementById(randomProject.title)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const focusInput = () => {
    const inputElement = document.getElementById("search");
    if (inputElement) {
      const { top } = inputElement.getBoundingClientRect();
      window.scrollTo({
        top: top - 16,
        behavior: "smooth",
      });
    }
  };

  // When F is pressed, focus the search input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "f") {
        e.preventDefault();
        document.getElementById("search")?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <Stack paddingY={1} width="100%">
      <Stack direction="row" flexWrap="wrap" gap={1}>
        <Input
          size="lg"
          id="search"
          placeholder={`Search ${filteredProjects.length} project${
            filteredProjects.length === 1 ? "" : "s"
          }`}
          variant="outlined"
          value={search}
          className={debouncedSearch !== search ? "loading" : ""}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={mobile ? focusInput : () => {}}
          startDecorator={
            debouncedSearch !== search ? (
              <CircularProgress
                size="sm"
                color="neutral"
                variant="soft"
                sx={{
                  margin: "-4px",
                  "& circle": {
                    transition: "all ease .05s",
                  },
                }}
              />
            ) : (
              <IoIosSearch />
            )
          }
          endDecorator={
            search !== "" && (
              <IconButton
                variant="plain"
                color="neutral"
                sx={{ fontSize: "1.5rem" }}
                onClick={() => setSearch("")}
              >
                <IoIosClose />
              </IconButton>
            )
          }
          sx={(theme) => ({
            transition: "all ease .2s",
            width: mobile || tablet ? "100%" : "min(100%, 30rem)",
            cursor: "pointer",
            borderRadius: "0",
            outline: "none",
            backgroundColor: theme.palette.background.body,
            "--Input-focusedHighlight": theme.palette.text.secondary,

            "&:before": {
              transition: "all ease .2s",
            },

            "&:has(:focus), &.loading": {
              borderRadius:
                mobile || tablet ? "100vmax" : "100vmax 0 0 100vmax",
            },
          })}
        />
        {/* <Select
          placeholder="Filter by platform"
          color="neutral"
          variant="outlined"
          sx={(theme) => ({
            transition: "all ease .2s",
            borderRadius: "0",
            flex: mobile || tablet ? 1 : "initial",
            backgroundColor: theme.palette.background.body,
            width: "12rem",
            "& + ul": {
              borderRadius: "0",
              padding: 0,
            },
          })}
          value={platform}
          onChange={(_, newValue) => setPlatform(newValue)}
          endDecorator={
            platform !== null && (
              <IconButton
                variant="plain"
                color="neutral"
                sx={{ fontSize: "1.5rem" }}
                onClick={() => setPlatform(null)}
              >
                <IoIosClose />
              </IconButton>
            )
          }
          indicator={platform !== null ? null : undefined}
          renderValue={(option) => {
            const details = platformDetails[option?.value as Platform];
            return (
              option &&
              details && (
                <Stack direction="row" gap={1} alignItems="center">
                  <details.icon />
                  {option.label}
                </Stack>
              )
            );
          }}
        >
          {Object.entries(platformDetails).map(([key, item]) => {
            const selected = platform === key;
            const occurrences = filteredProjects.filter(
              (project) => project.platform === key
            ).length;
            return (
              <Option
                key={key}
                color="neutral"
                component={Stack}
                label={item.label}
                value={key}
                direction="row"
                disabled={occurrences === 0}
                gap={1}
              >
                <item.icon />
                <Typography flex="1" textColor="inherit">
                  {item.label}
                </Typography>
                <Chip
                  size="sm"
                  variant={selected ? "solid" : "soft"}
                  color="neutral"
                  disabled={occurrences === 0}
                >
                  {occurrences}
                </Chip>
              </Option>
            );
          })}
        </Select> */}
        <Button
          size="lg"
          variant="outlined"
          color="neutral"
          startDecorator={<IoIosShuffle style={{ fontSize: "1.5rem" }} />}
          onClick={randomize}
          sx={(theme) => ({
            transition: "all ease .2s",
            position: "relative",
            borderRadius: "0",
            width: "fit-content",
            flexShrink: 0,
            paddingInline: "1rem",

            borderColor: theme.palette.text.primary,
            background: theme.palette.text.primary,
            color: theme.palette.background.level1,
            "& > span > svg": {
              transition: "all ease .2s",
            },
            "&:hover": {
              backgroundColor: theme.palette.background.body,
              color: theme.palette.text.primary,
              "& > span > svg": {
                transform: "rotate3d(1, 0, 0, 540deg) scale(1.2)",
              },
            },
            "&:active": {
              transform: "scale(.98)",
            },
          })}
        >
          Randomize
        </Button>
      </Stack>
      <Stack paddingBlockStart={4}>
        {loading ? (
          <Message
            title="Working on it..."
            subtitle="We are fetching the projects for you. This should only take a few seconds."
          >
            <CircularProgress size="lg" color="neutral" variant="outlined">
              <GoDownload size="1.5rem" />
            </CircularProgress>
          </Message>
        ) : (
          filteredProjects
            .sort(
              (a, b) => rank(b, filteredProjects) - rank(a, filteredProjects)
            )
            .map((project, index) => (
              <React.Fragment
                key={`${project.platform}-${project.title}-${project.source}`}
              >
                <ProjectCard
                  project={project}
                  open={openProject === project.title}
                  onClick={() =>
                    openProject === project.title
                      ? setOpenProject("")
                      : setOpenProject(project.title)
                  }
                />
                {index < filteredProjects.length - 1 && (
                  <Divider
                    sx={{
                      "&:has(+ .open)": {
                        display: "none",
                      },
                    }}
                  />
                )}
              </React.Fragment>
            ))
        )}
        {filteredProjects.length === 0 &&
          !loading &&
          debouncedSearch === search && (
            <Message
              title={
                error
                  ? "This usually never happens..."
                  : "Well that's embarrassing..."
              }
              subtitle={
                error
                  ? error.message
                  : "We couldn't find any projects matching your search criteria. Try a different search term or platform."
              }
            >
              {error ? <CiWifiOff size="5rem" /> : <CiSearch size="5rem" />}
            </Message>
          )}
      </Stack>
    </Stack>
  );
}
