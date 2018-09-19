import React, {Component} from 'react'
import {Feed, Icon} from 'semantic-ui-react'

export default class CommentItem extends Component {
  render() {
    return (
      <Feed>
        <Feed.Event>
          <Feed.Label
            image='https://i.pinimg.com/originals/7a/60/96/7a609671130f23aca336f7f9fead2d44.jpg'/>
          <Feed.Content className="mt-0">
            <Feed.Summary>
              <a>Joe Henderson</a>
              <Feed.Date>3 days ago</Feed.Date>
            </Feed.Summary>
            <Feed.Extra text className="m-0 lead">
              Ours is a life of constant reruns. We're always circling back to where we'd we
              started, then starting all over again. Even if we don't run extra laps that day,
              we surely will come back for more of the same another day soon.
            </Feed.Extra>
            <Feed.Meta>
              <Feed.Like>
                <Icon name='like'/>
                5 Likes
              </Feed.Like>
            </Feed.Meta>
          </Feed.Content>
        </Feed.Event>
      </Feed>

    )
  }
}
