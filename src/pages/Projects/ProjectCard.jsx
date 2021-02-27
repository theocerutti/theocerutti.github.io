import React from "react";
import Card from "react-bulma-components/lib/components/card";
import Content from "react-bulma-components/lib/components/content";
import Heading from "react-bulma-components/lib/components/heading";
import numeral from "numeral";
import { textCutter } from "../../utils/parser";
import moment from "moment";

const ProjectCard = ({ repo }) => {
  const onStarProject = () => {
    console.log("star ", repo.full_name);
  };

  return (
    <span className="column is-one-third">
      <Card>
        <Card.Content>
          <div className="columns is-align-items-center">
            <span className="column is-2 has-text-centered hvr-icon-fade-star">
              <i onClick={ onStarProject } className="fas fa-star fa-lg hvr-icon is-clickable"/>{ " " }
              <p>{ numeral(repo.stargazers_count).format("0a") }</p>
            </span>
            <span className="column">
              <Heading size={ 5 }>
                <a className="repo-link" href={ repo.html_url }>
                  { repo.name }
                </a>
              </Heading>
              <Heading subtitle size={ 6 }>
                { textCutter(repo.description, 80) }
              </Heading>
            </span>
          </div>
          <Content className="is-align-items-flex-end">
            <span className="is-italic">
              Updated { moment(repo.updated_at, "YYYYMMDD").fromNow() }
            </span>
            <span className="is-pulled-right">
              <span className="mr-3">
                <i className="fas fa-exclamation-circle"/> { repo.open_issues_count }
              </span>
              <span>
                <i className="fas fa-code-branch"/> { repo.forks_count }
              </span>
            </span>
          </Content>
        </Card.Content>
      </Card>
    </span>
  );
};

export default ProjectCard;