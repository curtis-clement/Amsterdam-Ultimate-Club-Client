import React from 'react'
import style from '../../CSS Modules/whatisultimate.module.css';

export default function WhatIsUltimate() {
  return (
    <div>
      <div>
      <h1 className={style.header}>What Is Ultimate</h1>
      <hr className={style.line}/>
      </div>

      <container className={style.info}>
      <div className={style.about}>
        <h3>About Ultimate</h3>
        <hr className={style.boxline}/>
        <p>
          Ultimate Frisbee, explained as simply as possible, is a game played between two teams of seven players
          on a large rectangular pitch. A line drawn across the pitch at either end creates two “endzones” (like in American Football, or Rugby).
          These are the goal-scoring areas. A goal is scored when a team completes a pass to a player standing (or more likely running)
          in the endzone they are attacking.
        </p>
        <p>
          Players cannot run with the disc. When you get the disc you must come to a stop and try to throw it to another player (a bit like netball).
          By passing from player to player, the offence attempts to work the disc up the pitch towards the endzone they are attacking. 
          If the disc hits the ground or is intercepted or knocked down by the other team, then the opposition takes possession (it's called a "turnover"). 
          Possession also changes if a receiver is outside the playing area when he or she catches it.
        </p>
        <p>
          The defending team attempts to stop the team with the disc from making progress upfield by marking them (as in soccer or basketball). 
          The theory is that the offence won’t want to pass to a player who is being marked closely, as it’s likely to result in an interception. 
          So it boils down to the offence players trying to get free of their markers to receive a pass, while the defence makes every effort to stay 
          with them in the hope of forcing a turnover.
        </p>
      </div>

      <div className={style.rules}>
        <h3>The 10 Simple Rules</h3>
        <hr className={style.boxline}/>
        <ol>
          <li>Spirit of the Game: Ultimate stresses sportsmanship and fair play. Competitive play is encouraged, but never at the expense of 
            respect between players, adherence to the rules, and the basic joy of play.
          </li>
          <li>The Field: A rectangular shape (100m by 37m) including two end zones that are 18m deep. </li>
          <li>Starting Play: Each point begins with both teams lining up on their end zone line. The defense throws ("pulls") the disc to the offense.</li>
          <li>Disc Movement: The disc may be advanced in any direction by completing a pass to a teammate. Players may not run with the disc. 
            The person with the disc ("thrower") has ten seconds to throw the disc. The defender guarding the thrower ("marker") counts out the stall count.  
            The defender cannot start the stall count until they are within 3 m of the thrower
          </li>
          <li>Change of Possession: When a pass is not completed (e.g. out of bounds, drop, block, interception) or if the stall count reaches ten, 
            the defense immediately takes possession of the disc and becomes the offense.
          </li>
          <li>Scoring: When a person catches the disc in the opposing endzone, that person’s team scores a point.</li>
          <li>Substitutions: Substitutions can only be made after a point is scored or if a player is injured.</li>
          <li>Non-Contact: Non-incidental contact is not allowed between players. Picks and screens are also prohibited.</li>
          <li>Fouls: When a player initiates contact on another player a foul occurs. When a foul disrupts possession, the play resumes as if the possession was retained. 
            If the player committing the foul disagrees with the foul call, the play is redone.
          </li>
          <li>Self-Officiating: Players are responsible for their own foul and line calls. Players resolve their own disputes.</li>
        </ol>
      </div>
      </container>

      <container className={style.moreinfo}>
        <div className={style.linksheader}>
          <h4>More Ultimate Info</h4>
          <hr className={style.line}/>
        </div>
        <div className={style.links}>
          <div className={style.linkbody1}>
            <h4 className={style.externallink}> <a href='http://www.wfdf.org/'>WFDF</a></h4>
            <p>
              World Flying Disc Federation (or WFDF) is the governing body of Ultimate world wide outside of the United States (goverend by USAU)
              For the full rules, news, and updates on ultimate around the world, check them out!
            </p>
          </div>

          <div className={style.linkbody2}> 
            <h4 className={style.externallink}> <a href='https://theaudl.com/'>AUDL</a></h4>
            <p>The American Ultimate Disc League is current professional North American ultiamte league.</p>
          </div>
        </div>
      </container>

    </div>
  )
}
