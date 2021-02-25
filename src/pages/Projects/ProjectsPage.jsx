import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Hero from 'react-bulma-components/lib/components/hero';
import Container from "react-bulma-components/lib/components/container";
import Loader from 'react-bulma-components/lib/components/loader';
import Heading from "react-bulma-components/lib/components/heading";
import SearchBar from "../../components/search-bar/SearchBar";
import { fetchRepos, selectGithubReposValues } from "../../slices/githubReposSlice";
import { getData, selectFilteredData } from "../../slices/searchDataSlice";
import ProjectCard from "./ProjectCard";
import "./Projects.scss";

const ProjectsPage = () => {
  const dispatch = useDispatch();
  const filteredData = useSelector(selectFilteredData)
  const { loading, hasErrors, errorMessage, repos } = useSelector(selectGithubReposValues);

  useEffect(() => {
    dispatch(fetchRepos());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getData(repos.items))
  }, [dispatch, repos])

  console.log('Data:', filteredData, ' loading: ', loading, ', hasError: ', hasErrors);

  return (
    <div>
      <Hero className="is-medium project-hero">
        <Hero.Body>
          <Container>
            <Heading className="project-hero-body">
              My projects
            </Heading>
            <Heading subtitle size={3}>
              All projects I made
            </Heading>
            <SearchBar className="project-search-bar pt-3"/>
          </Container>
        </Hero.Body>
      </Hero>
      { loading ? <Loader/> :
        hasErrors ? <div>Error! Message: { errorMessage }</div> :
          filteredData !== undefined ?
          filteredData.map((data, key) => (
            <ProjectCard key={ key } repo={ data } />
          )) : <div>Error!</div>
      }
    </div>
  );
};

export default ProjectsPage;