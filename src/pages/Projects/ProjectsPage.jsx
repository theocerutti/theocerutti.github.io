import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hero from "react-bulma-components/lib/components/hero";
import Container from "react-bulma-components/lib/components/container";
import Loader from "react-bulma-components/lib/components/loader";
import Heading from "react-bulma-components/lib/components/heading";
import SearchBar from "../../components/search-bar/SearchBar";
import { fetchRepos, selectGithubReposValues } from "../../slices/githubReposSlice";
import { getData, selectFilteredData } from "../../slices/searchDataSlice";
import ProjectCard from "./ProjectCard";
import "./Projects.scss";
import Notification from "react-bulma-components/lib/components/notification";

const ProjectsPage = () => {
  const dispatch = useDispatch();
  const filteredData = useSelector(selectFilteredData);
  const { loading, hasErrors, errorMessage, repos } = useSelector(selectGithubReposValues);

  useEffect(() => {
    dispatch(fetchRepos());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getData(repos));
  }, [dispatch, repos]);

  return (
    <div>
      { !hasErrors ? null :
        <Notification style={ { padding: "10px" } } className="github-error-notification columns" color="danger">
          <p className="column has-text-centered">
            Error with github API: { errorMessage.message || "No Message" }
          </p>
          <span className="is-clickable">
            <i className="fa fa-sync-alt column is-1" onClick={ () => dispatch(fetchRepos()) }/>
          </span>
        </Notification>
      }
      <Hero className="is-medium project-hero">
        <Hero.Body>
          <Container>
            <Heading className="project-hero-body">
              My projects
            </Heading>
            <Heading subtitle size={ 3 }>
              All projects I made
            </Heading>
            <SearchBar className="project-search-bar pt-3"/>
          </Container>
        </Hero.Body>
      </Hero>
      <span>
        {
          hasErrors || loading ? <Loader className="loader"/> :
            filteredData !== undefined && filteredData.length === 0 ?
              <Heading className="no-repo">No repository!</Heading> :
              filteredData !== undefined ?
                <Container className="is-fluid p-6">
                  <div className="columns is-multiline">
                    { filteredData.map((data, key) => <ProjectCard key={ key } repo={ data }/>) }
                  </div>
                </Container>
                : null
        }
      </span>
    </div>
  );
};

export default ProjectsPage;