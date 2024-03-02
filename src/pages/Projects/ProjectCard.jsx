import React from "react";
import Card from "react-bulma-components/lib/components/card";
import Content from "react-bulma-components/lib/components/content";
import Heading from "react-bulma-components/lib/components/heading";
import numeral from "numeral";
import { textCutter } from "../../utils/parser";
import moment from "moment";
import MultiProgressBar from "../../components/multi-progress-bar/MultiProgressBar";
import { githubLanguagesColors } from "../../components/multi-progress-bar/github-languages-colors";

const ProjectCard = ({ repo }) => {
  const formatMultiProgressData = () => {
    const languages = repo.detailed_languages;
    let totalValue = 0;

    if (!languages)
      return [];

    Object.keys(languages).map(key => totalValue += languages[key])

    return Object.keys(languages).map(key => {
      return { name: key, color: githubLanguagesColors[key] || "#000000", value: languages[key] * 100 / totalValue }
    })
  }

  return (
    <span className="column is-one-third">
      <Card>
        <Card.Content>
          <div className="columns is-align-items-center">
            <span className="column is-2 has-text-centered hvr-icon-fade-star">
              <i className="fas fa-star fa-lg hvr-icon"/>{ " " }
              <p>{ numeral(repo.stargazers_count || 0).format("0a") }</p>
            </span>
            <span className="column">
              <Heading size={ 5 }>
                <a className="repo-link" href={ repo.html_url }>
                  { repo.name || "Not Found" }
                </a>
              </Heading>
              <Heading subtitle size={ 6 }>
                { textCutter(repo.description || "No Description", 80) }
                <MultiProgressBar className="mt-3 mr-6" data={ formatMultiProgressData() } renderLegends={item => (
                  <>
                    <span className="dot" style={ { "color": item.color } }>●</span>{' '}
                    { item.name }: { parseInt(item.value) }%
                  </>
                ) }/>
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
