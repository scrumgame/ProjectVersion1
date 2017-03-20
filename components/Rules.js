import React, { Component } from 'react';
import './css/Rules.css'

export default class Rules extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container-fluid">
        <div>
          <p>
            Welcome to the agile board game – rules section. This document describes the rules for playing this game, with the goal to learn as much as possible about how to work agile in teams and of course, to earn as much money as possible. Just as in real life, moving the cards on the Scrum board from left to right is the way to go.
            One sprint equals five days. After each sprint all user stories that are in done column are released, which means team get paid. The user stories are then removed from Done column and a new sprint starts.
            Each team consists of:
            1 Analyst = 1 dice/day
            4 developers = 4 dice/day
            1 tester = 1 dice/day
          </p>

            <h4 className="rules-bold"> Note: </h4>

          <ul>
            <li className="rules-bold"> It is allowed to re-assign people between roles, for example assign developers to Analyst work, if that is decided when the day starts. The Analyst can do Test work and vice versa, but neither Test nor Analyst can do development work.
            </li> <br/>
            <li className="rules-bold"> Each team member is one roll of dice for each day.
            </li> <br/>
            <li className="rules-bold"> Team members cannot start work if there is nothing in the corresponding column, so the day is wasted for that team member if there is nothing to do.
            </li> <br/>
            <li className="rules-bold"> Team members can only work on stories that are in their respective column when the day starts.
            </li> <br/>
          </ul>

          <div className="text-center">
            <h3> Scrumboard </h3>
            <img className="scrumboard-example-img img-responsive" src={require("../images/scrumboard.png")} />
          </div>

          <div className="types">

            <h4 className="rules-bold"> Types of stories: </h4>

            <div>
              <div className="us-example">
                <h4 className="us-example-headline">US 1</h4>
                <p> <b className="us-adt">$</b>100 </p>
                <p> <b className="us-adt">A</b>: 7 &nbsp;
                    <b className="us-adt">D</b>: 5 &nbsp;
                    <b className="us-adt">T</b>: 4
                  </p>
              </div>

              <ul>
              <li> User stories(US) </li>
              <li> Defects(D) </li>
              <li> Maintenance taks(M) </li>
              </ul>

              <p>
                A = Analysis task <br/>
                D = Development <br/>
                T = Testing <br/>
                $ = the amount of money received at release, if US is completed. Defect and Maintenance taks usually do not include any money.
              </p>

              <p>
                The team can choose wheter or not to spend time on Defects or Maintenance tasks in the beginning of each sprint. When the die is cast cross over one point for each number on the die on each of the stories.
              </p>
            </div>

            <div>
              <h4 className="rules-bold"> Cards: </h4>
              <p>
                There are two types of cards, action cards and Multiple choice cards. When to draw a card is determined in the releaseplan (see below). The card is drawn in the beginning of the day and read out loud by Scrum Master.
              </p>

              <div className="action-card-example">
                <h4 className="rules-bold"> Action card example Sprint 1 day 5
                </h4>
                <p>
                  Due to flooding one developer cannot come to work today. Remove one dice
                </p>
              </div>

              <h4 className="rules-bold"> Action cards: </h4>
              <p>
                Each action card is tied to a specific time in sprint. The action cards all have an impact on the current sprint for a limited duration of time. Each card that has an impact on sprint is placed over the scrum board during the impact period.
              </p>

              <h4 className="rules-bold"> Multiple choice cards: </h4>
              <p>
                The multiple choice cards provide some additional spice into the sprints. Each option has the possibility to provide the team with certain consequences, for a limited time. The consequences can both have negative and positive impact. Team has to agree on an option together.
              </p>

              <div className="multiplechoice-card-example">
                <h4 className="rules-bold"> Multiple choice card example Sprint 2 day 2
                </h4>
                <p>
                  The team discovers that the top story in development is in need of refactoring, total 1 point of extra development. Do you spend the time now? Yes or No.</p>
              </div>
            </div>

            <div className="retrospective-rules">
              <h4 className="rules-bold"> Retrospective: </h4>
              <p>
                After each sprint, please do a short retrospective and write it down so you can be improved in the next sprint.
              </p>

              <h4 className="rules-bold"> Release plan: </h4>
              <p>
                The release plan keeps track of where the team is in the sprints. it's a checklist where the scrum master puts crosses for each day the team has completed, and also to keep track of money earned for each sprint. The scrum master of the team is responsible for keeping the release plan updated at all times.
              </p>

              <p>
                In the example release plan below the game is in the third sprint with second day finished, money earned so far is 1250$. Note also the action cards (AC1-6) and multiple choice cards (MC1-5) are written in the release plan, to keep track of when each card should be put into play.
              </p>

              {/* <div className="releaseplan-img">Space for relesplan img or somethink </div> */}
            </div>

            <div>
              <h4 className="rules-bold"> Getting started: </h4>
              <ol>
                <li> Elect a scrum master in the group </li>
                <li>
                  Team can choose wheather or not to do work on defects or maintenance tasks by putting them in the product backlog mixed with user stories.
                </li>
                <li> Start burning points!</li>
              </ol>
              <p> Good luck! </p>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
