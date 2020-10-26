import React from "react"
import styled from "styled-components"
import socialIcons from "../../constants/social-icons"

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="social-icons">
      {socialIcons.map((item, index) => {
        return (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">{item.name}</span>
            {item.icon}
          </a>
        )
      })}
      </div>
      <div className="footer-links">
        <div>
        <div class="block region-count-1">
          <div id="community_links">
          	<p>Join our mailing list to receive the latest news and updates from F+S.</p>
          </div>
          <div id="mc_embed_signup">
          	<form action="//forms-surfaces.us1.list-manage.com/subscribe/post?u=deed5374c301844ccef9b55ac&amp;id=44315d1845" class="validate" id="mc-embedded-subscribe-form" method="post" name="mc-embedded-subscribe-form" novalidate="" target="_blank">
          		<div id="mc_embed_signup_scroll">
          			<input class="email" id="mce-EMAIL" name="EMAIL" placeholder="email address" required="" type="email" value="" />
          			<div aria-hidden="true" style={{position: 'absolute', left: '-50000px'}}>
          				<input name="b_deed5374c301844ccef9b55ac_3e2c17d270" tabindex="-1" type="text" value="" />
          				<input type="checkbox" value="2" name="group[21][2]" id="mce-group[21]-21-0" checked="checked" />
          				<input type="checkbox" value="1" name="group[21][1]" id="mce-group[21]-21-1" checked="checked" />
          			</div>
          			<div class="clear">
          				<input class="button" id="mc-embedded-subscribe" name="subscribe" type="submit" value="Subscribe" />
                </div>
          		</div>
          	</form>
          </div>
        </div>
        </div>

        <div>
        </div>

        <div>
        </div>

        <div>
        </div>

        <div>
        </div>

      </div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  background-color: #fff;
  .social-icons{
    padding: 20px 30px;
    text-align: center;
    border-top: solid 1px #999;
    border-bottom: solid 1px #999;
  }
  .footer-links{
    display: flex;
    padding: 0;
    margin: 0 auto;
    width: 100%;
    max-width: 950px;
    color: #999;
    p{
      font-size: .8rem;
    }
    >div {
      flex-basis: 100%;
    }
  }
  .credit {
    font-size: 0.85rem;
    margin-bottom: 0.5rem;

    a {
      padding: 0;
      font-size: 0.85rem;
      text-decoration: none;
    }
  }
  /* #mc_embed_signup{
    background:#fff;
    clear:left;
    font:14px Helvetica,Arial,sans-serif;
  } */
  @media only screen and (min-width: 600px) {
    .footer-links{
      display: flex;
      >div {
        flex-basis: 20%;
      }
    }
  }

  a {
    color: #999;
    font-size: 1.75rem;
    padding: 0 0.5rem;

    svg {
      vertical-align: middle;
    }
  }
`

export default Footer
