import React from "react";

import { useParams } from "react-router-dom";
import studys from "../../data/studycase";

const StudyCase = ({language }) => {
  const { clientname } = useParams();
  const study = studys.find((study_item) => study_item.name === clientname);
  console.log(study);

  return (
    <div>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">{study.nameb}</h1>
            <h2 class="subtitle"></h2>
          </div>
        </div>
      </section>

      {!study && <h1>Cette page n'existe pas</h1>}

      {language === "fr" && study && (
        <div>
          <div className="box mt-5 mr-4 ml-4">
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong> {study.titlefr} </strong> <br></br>
                    <h1>{study.contentfr}</h1>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      )}
      {language === "en" && study && (
        <div>
          <div className="box mt-5 mr-4 ml-4">
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong> {study.titleen} </strong> <br></br>
                    <h1>{study.contenten}</h1>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudyCase;
