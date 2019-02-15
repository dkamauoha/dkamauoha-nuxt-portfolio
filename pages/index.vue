<template>
  <section class="container">
    <div>
      <div class='hamburger-icon' @click="showSidebar = true">
        <div class='hamburger-line'></div>
        <div class='hamburger-line'></div>
        <div class='hamburger-line'></div>
      </div>
      <div :class='sidebarClass'>
        <div class='sidebar-option' v-scroll-to='"#title"' @click='showSidebar = false'>Home</div>
        <div class='sidebar-option' v-scroll-to='"#skills"' @click='showSidebar = false'>Skills</div>
        <div class='sidebar-option' v-scroll-to='"#projects"' @click='showSidebar = false'>Projects</div>
        <div class='sidebar-option' v-scroll-to='"#about"' @click='showSidebar = false'>About</div>
        <div class='sidebar-option' v-scroll-to='"#contact"' @click='showSidebar = false'>Contact</div>
      </div>
      <div :class='backdropClass'  @click="showSidebar = false"></div>
      <div class='title-container' id='title'>
        <div class='title-title'>DYLAN KAMAUOHA</div>
        <div class='title-subtitle'>Web Developer</div>
        <!-- <a href='#' v-scroll-to='"#skills"'>Skills</a> -->
      </div>
      <div class='parallax-header'>
        <Parallax
          :fixed='true'
          :speed-factor='0.1'
        >
          <img :src='beach1'>         
        </Parallax>
      </div>
      <div class='skills-container' id='skills'>
        <h1 class='skills-header'>Skills</h1>
        <div class='spacer'></div>
        <div class='skills-icon-container'>
          <div v-for='(logo, i) in logos' :key='i'>
            <div class='skills-icon'>
              <img class='icon-image' :src='logo.image' alt=''>
              <p class='icon-name'>{{ logo.name }}</p>
            </div>
          </div>
        </div>        
      </div>
      <div class='project2-container'>
        <div class='project2-carousel-container'>
          <b-carousel class='screenshot-carousel'
            style='text-shadow: 1px 1px 2px #333'
            controls
            indicators
            :interval="10000"
            img-height='100%'

            v-model="slide2"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <b-carousel-slide :img-src="GP_Landing"></b-carousel-slide>
            <b-carousel-slide :img-src="GP_Login"></b-carousel-slide>
            <b-carousel-slide :img-src="GP_Recipe_List"></b-carousel-slide>
            <b-carousel-slide :img-src="GP_Calendar"></b-carousel-slide>
            <b-carousel-slide :img-src="GP_Profile"></b-carousel-slide>
          </b-carousel>
        </div>
        <div class='project2-description-container'>
          <h1 class='project-description-heading'>Prapp</h1>
          <div class='spacer white' style='marginBottom: 10px;'></div>
          <h5 class='project-description-subtitle'>Developed as a Group</h5>
          <p class='project-description-description'>A website designed for people who like to plan out their meals for the week. Users can take recipes that others have added, or add their own recipes to our database, and can add recipes to their weekly recipe calendar. Once recipes are added, a shopping list is created for them.</p>
          <div class='project-description-button-container'>
            <a href='https://prapp.cartr.co/' style='textDecoration: none; color: white;'><div class='project-description-button'>Live Site</div></a>
            <a href='https://github.com/group-repos/prapp' style='textDecoration: none; color: white;'><div class='project-description-button'>Github Repo</div></a>
          </div>
        </div>
      </div>
      <div class='project-section-header' id='projects'>
        <div class='project-section-heading'>Projects</div>
      </div>
      <div class='project1-container'>
        <div class='project-carousel-container'>
          <b-carousel class='screenshot-carousel'
            style='text-shadow: 1px 1px 2px #333'
            controls
            indicators
            :interval="10000"
            img-height='100%'
            v-model="slide"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <b-carousel-slide :img-src="PP_Homepage"></b-carousel-slide>
            <b-carousel-slide :img-src="PP_Sidebar"></b-carousel-slide>
            <b-carousel-slide :img-src="PP_Schedule"></b-carousel-slide>
            <b-carousel-slide :img-src="PP_Appointments"></b-carousel-slide>
          </b-carousel>
        </div>
        <div class='project-description-container'>
          <h1 class='project-description-heading'>Amber's Hair and Lashes</h1>
          <div class='spacer white' style='marginBottom: 10px;'></div>
          <h5 class='project-description-subtitle'>Personally Developed</h5>
          <p class='project-description-description'>I developed this app for my wife, who is a hair stylist. Clients can sign in to view services and book appointments.</p>
          <div class='project-description-button-container'>
            <a href='https://ambershairandlashes.net' style='textDecoration: none; color: white;'><div class='project-description-button'>Live Site</div></a>
            <a href='https://github.com/dkamauoha/personal-project-website' style='textDecoration: none; color: white;'><div class='project-description-button'>Github Repo</div></a>
          </div>
        </div>
      </div>
      <div class='about-container' id='about'>
        <img :src='ProfilePic' alt='' class='about-profile-pic'>
        <br/>
        <h1>About Me</h1>
        <div class='spacer white'></div>
        <p class='about-description'>Junior level web developer looking to developing my skills. I have experience making full-stack web applications with React, Node, and PostgreSQL. I am happy to work hard, alone or on a team, to reach goals and exceed expectations.</p>
        <br/>
        <div class='about-info-container'>
          <div v-for='(info, index) in aboutInfo' :key='index' :class='info.class'>          
              <div class='about-info-icon-container'>
                <img :src='info.icon' alt='' class='icon-icon'>
              </div>
              <div class='about-info-text-container'>
                <h2>{{ info.header }}</h2>
                <p>{{ info.description }}</p>
              </div>
          </div>
        </div>
      </div>
      <div class='contact-container' id='contact'>
        <div class='contact-left-container'>
          <h2 class='contact-left-header'>Reach Out to Me</h2>
          <div class='spacer'></div>
          <div v-for='(media, index) in mediaLinks' @click='media.redirect' :key='index' class='contact-left-media-container'>
            <div class='contact-left-media-icon-container'>
              <img :src='media.logo' alt='' class='contact-left-media-icon'>
            </div>
            <div class='contact-left-media-text'>{{ media.text }}</div>
          </div>
        </div>
        <div class='contact-right-container'>
          <h2 style='margin-top: 20px; text-align:'>Send Me an Email</h2>
          <div class='contact-right-input-container'>
            <h5>Email</h5>
            <b-input class='contact-right-input' v-model='email'></b-input>
          </div>
          <div class='contact-right-input-container'>
            <h5>Subject</h5>
            <b-input class='contact-right-input' v-model='subject'></b-input>
          </div>
          <div class='contact-right-input-container'>
            <h5>Message</h5>
            <b-form-textarea 
              class='contact-right-input'
              v-model='message'
              :rows='3'
              :max-rows='5'
              no-resize
            ></b-form-textarea>
            <div class='project-description-button right' style='align-self: flex-end;' @click='sendEmail'>Send</div>
          </div>
        </div>
      </div>
    </div>
    <footer class='footer'>
      <p class='footer-text'>SVGs provided by <a href='https://fontawesome.com/license'>Font Awesome</a></p>
    </footer>
  </section>
</template>

<script>

/////Components
import Parallax from 'vue-parallaxy';

/////images
import sunset from '~/assets/images/sunset.jpg';
import beach1 from '~/assets/images/beach1.jpg';
import forestLake from '~/assets/images/forestLake.jpg';
import ProfilePic from '~/assets/images/Profile-Picture.jpg';
    ///// Personal Project Images
import PP_Appointments from '~/assets/images/PersonalProject/PP_Appointments.png';
import PP_Homepage from '~/assets/images/PersonalProject/PP_Homepage.jpg';
import PP_Schedule from '~/assets/images/PersonalProject/PP_Schedule.png';
import PP_Sidebar from '~/assets/images/PersonalProject/PP_Sidebar.png';
    ///// Group Project Images
import GP_Calendar from '~/assets/images/GroupProject/GP_Calendar.jpg';
import GP_Landing from '~/assets/images/GroupProject/GP_Landing.jpg';
import GP_Login from '~/assets/images/GroupProject/GP_Login.jpg';
import GP_Profile from '~/assets/images/GroupProject/GP_Profile.jpg';
import GP_Recipe_List from '~/assets/images/GroupProject/GP_Recipe_List.jpg';


/////Icon SVGs
import vueLogo from '~/assets/SVG/vue-logo.svg';
import react from '~/assets/SVG/react.svg';
import node from '~/assets/SVG/nodejs-icon.svg';
import javascript from '~/assets/SVG/javascript.svg';
import htmlIcon from '~/assets/SVG/html5-with-wordmark-color.svg';
import cssIcon from '~/assets/SVG/css3.svg';
import postgresql from '~/assets/SVG/postgresql-icon.svg';
import gitLogo from '~/assets/SVG/git-seeklogo.com.svg';
import firebaseLogo from '~/assets/SVG/firebase-seeklogo.com.svg';

//Random Icon SVGs
import codeSolid from '~/assets/SVG/icons/code-solid.svg';
import starSolid from '~/assets/SVG/icons/star-solid.svg';
import gamepadSolid from '~/assets/SVG/icons/gamepad-solid.svg';
import wrenchSolid from '~/assets/SVG/icons/wrench-solid.svg';

//Media Icon SVGs
import github from '~/assets/SVG/media/github.svg';
import linkedin from '~/assets/SVG/media/linkedin.svg';
import emailIcon from '~/assets/SVG/media/email.svg';
import phoneIcon from '~/assets/SVG/media/phone.svg';

export default {
  components: {
    Parallax,
  },
  data: function () {
    return {
      sunset,
      beach1,
      PP_Homepage,
      PP_Appointments,
      PP_Schedule,
      PP_Sidebar,
      GP_Calendar,
      GP_Landing,
      GP_Login,
      GP_Profile,
      GP_Recipe_List,
      forestLake,
      ProfilePic,
      showSidebar: false,
      slide: 0,
      slide2: 0,
      sliding: null,
      sliding2: null,
      email: '',
      subject: '',
      message: '',
      logos: [
        {
          image: vueLogo,
          name: 'Vue'
        },
        {
          image: react,
          name: 'React'
        },
        {
          image: node,
          name: 'Node'
        },
        {
          image: javascript,
          name: 'Javascript'
        },
        {
          image: htmlIcon,
          name: 'HTML5'
        },
        {
          image: cssIcon,
          name: 'CSS3'
        },
        {
          image: postgresql,
          name: 'PostgreSQL'
        },
        {
          image: gitLogo,
          name: 'Git'
        },
        {
          image: firebaseLogo,
          name: 'Firebase'
        }
      ],
      aboutInfo: [
        {
          icon: codeSolid,
          header: 'Problem Solver',
          description: 'I enjoy tackling complex problems, especially when it comes to code.',
          class: 'about-info-card info1'
        },
        {
          icon: starSolid,
          header: 'Team Player',
          description: 'I excel at communicating with team members, and makins sure that everyone is on track to hit goals on time.',
          class: 'about-info-card info2'
        },
        {
          icon: gamepadSolid,
          header: 'Gamer',
          description: 'I like video games',
          class: 'about-info-card info3'
        },
        {
          icon: wrenchSolid,
          header: 'Hard Worker',
          description: 'I find hard work satisfying, and will do everything I can to get the job done.',
          class: 'about-info-card info4'
        },
      ],
      mediaLinks: [
        {
          logo: github,
          text: 'github.com/dkamauoha',
          redirect: function () {
            window.location.href = 'https://github.com/dkamauoha'
          }
        },
        {
          logo: linkedin,
          text: 'linkedin.com/in/dylankamauoha',
          redirect: function () {
            window.location.href = 'https://www.linkedin.com/in/dylankamauoha/'
          }
        },
        {
          logo: emailIcon,
          text: 'dylantkamauoha@gmail.com',
          redirect: function () {
            console.log('Nowhere to redirect.')
          }
        },
        {
          logo: phoneIcon,
          text: '843.860.0751',
          redirect: function () {
            console.log('Nowhere to redirect.')
          }
        }
      ],
      banners: [
        sunset,
        sunset,
        forestLake
      ],
      swiperOption: {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        }
      },
      on: {
        slideChange () {
          console.log('onSlideChangeEnd', this);
        },
        tap () {
          console.log('onTap', this);
        }
      }
    }
  },
  methods: {
    onSlideStart: function (slide) {
      this.sliding = true;
      this.sliding2 = true;
    },
    onSlideEnd: function (slide) {
      this.sliding = false;
      this.sliding2 = false;
    },
    sendEmail: async function () {
      const messageItem = {
        email: this.email,
        subject: this.subject,
        message: this.message
      }
      let message = await this.$axios.$post('http://localhost:3000/api/contact', messageItem);
      console.log('Response from server', message)
    }
  },
  computed: {
    sidebarClass () {
      return this.showSidebar ? 'sidebar-container open' : 'sidebar-container';
    },
    backdropClass () {
      return this.showSidebar ? 'backdrop backdrop-open' : 'backdrop';
    }
  }
}
</script>


<style>
  @import './index.css';
</style>



