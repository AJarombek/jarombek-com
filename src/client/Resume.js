/**
 * Resume Component
 * @author Andrew Jarombek
 * @since 9/8/2018
 */

import React, { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import WebsiteTemplate from "./WebsiteTemplate";
import TitleImage from "./TitleImage";
import Timeline from "./Timeline";
import resumeSections from "./resumeSections";

const Resume = () => {
  const [searchParams] = useSearchParams();

  const [position, setPosition] = useState(1);
  const [prevPosition, setPrevPosition] = useState(0);

  const points = useMemo(() => resumeSections.length, []);

  useEffect(() => {
    const page = +(searchParams.get("page") ?? 1);

    if (page !== position) {
      setPrevPosition(position);
      setPosition(page);
    }
  }, [searchParams, position]);

  return (
    <WebsiteTemplate>
      <div className="jarbek-resume">
        <div className="jarbek-resume-timeline">
          <Timeline
            points={points}
            position={position}
            labels={resumeSections.map((item) => item.year)}
          />
        </div>
        <div className="jarbek-resume-title">
          {resumeSections.map((item, index) => (
            <div
              key={`jarbek-resume-title-${index}`}
              className={`${
                position === index + 1
                  ? prevPosition <= position
                    ? "jarbek-resume-title-active-right"
                    : "jarbek-resume-title-active-left"
                  : ""
              }
                 ${
                   position !== index + 1
                     ? index + 1 === prevPosition
                       ? position > prevPosition
                         ? "jarbek-resume-title-just-viewed-left"
                         : "jarbek-resume-title-just-viewed-right"
                       : "jarbek-resume-title-inactive"
                     : ""
                 }`}
            >
              <h5>{item.title}</h5>
            </div>
          ))}
        </div>
        {position !== 1 && (
          <Link
            className="jarbek-resume-prev"
            to={`/resume?page=${position - 1}`}
          >
            <TitleImage src="./assets/down-black.png" title="" />
          </Link>
        )}
        <div className="jarbek-resume-content">
          {resumeSections.map((item, index) => (
            <div
              key={`jarbek-resume-content-${index + 1}`}
              className={`${
                position === index + 1
                  ? prevPosition <= position
                    ? "jarbek-resume-content-active-right"
                    : "jarbek-resume-content-active-left"
                  : ""
              }
                 ${
                   position !== index + 1
                     ? index + 1 === prevPosition
                       ? position > prevPosition
                         ? "jarbek-resume-content-just-viewed-left"
                         : "jarbek-resume-content-just-viewed-right"
                       : "jarbek-resume-content-inactive"
                     : ""
                 }`}
            >
              {item.content}
            </div>
          ))}
        </div>
        {position !== points ? (
          <Link
            className="jarbek-resume-next"
            to={`/resume?page=${position + 1}`}
          >
            <TitleImage src="./assets/down-black.png" title="" />
          </Link>
        ) : null}
        <div className="jarbek-resume-tech">
          {resumeSections.map((item, index) => (
            <div
              key={`jarbek-resume-tech-${index + 1}`}
              className={`${
                position === index + 1
                  ? prevPosition <= position
                    ? "jarbek-resume-tech-active-right"
                    : "jarbek-resume-tech-active-left"
                  : ""
              }
                 ${
                   position !== index + 1
                     ? index + 1 === prevPosition
                       ? position > prevPosition
                         ? "jarbek-resume-tech-just-viewed-left"
                         : "jarbek-resume-tech-just-viewed-right"
                       : "jarbek-resume-tech-inactive"
                     : ""
                 }`}
            >
              {item.languages.length ? (
                <p className="jarbek-resume-tech-languages">
                  <strong>Languages: </strong>
                  {item.languages.reduce((acc, item, index) =>
                    index ? `${acc}, ${item}` : `${item}`,
                  )}
                </p>
              ) : null}
              {item.technologies.length ? (
                <p className="jarbek-resume-tech-technologies">
                  <strong>Technologies: </strong>
                  {item.technologies.reduce((acc, item, index) =>
                    index ? `${acc}, ${item}` : `${item}`,
                  )}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </WebsiteTemplate>
  );
};

export default Resume;
