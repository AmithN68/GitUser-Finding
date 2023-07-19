import React, { Fragment, useContext } from 'react';
import SearchComp from './SearchComp';
import Moment from 'react-moment';
import { GlobalContextApi } from './../contextApi/GlobalContext';

const MainPage = () => {
  let { repos } = useContext(GlobalContextApi);

  return (
    <section className='mainPage'>
          <article>
              <header>
                  <SearchComp />
        </header>
        <main>
          {repos === null ? (
            "loading"
          ) : (
              <Fragment>
                {repos.map(repo => {
                  return (
                    <div className="container" key={repo.id}>
                      <h1>{repo.name}</h1>
                      <p className="desc">{repo.description===null ? "no description" :repo.description.slice(0,30)+"..."}</p>
                      <p className="repo_content">
                        <span>{repo.language}</span>
                        <span>{repo.visibility}</span>
                        <span>
                          <Moment fromNow>{repo.created_at}</Moment>
                        </span>
                      </p>
                      <p className='btn_block'>
                        <a href={repo.clone_url}>clone</a>
                        <a href={repo.downloads_url}>download</a>
                        <a href={repo.html_url} target="_blank">
                          view github repo
                        </a>
                      </p>
                    </div>
                  );
                })}
              </Fragment>
          )}
        </main>
      </article>
    </section>
  )
}

export default MainPage
