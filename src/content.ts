export interface ProjectContent {
  id: number,
  h1: string,
  h3: string,
  text: string[]
};

export const PROJECT_CONTENT: ProjectContent[] = [
  {
    id: 1,
    h1: 'Exporting Fruit',
    h3: 'Angular 4, Loopback 3, MySql',
    text: [
      `The biggest project I've worked on so far has been an internal admin system for a fruit exporting company. I have
       worked on both the front and back ends of this project, using <a href="https://angular.io/" target="_blank">Angular 4</a> 
       and <a href="https://loopback.io/doc/index.html" target="_blank">Loopback 3</a> respectively, to create a web app for managing
       orders, logistics, costs and quality control of fruit exports.`,
      `The project utilises <a href="https://ng2.angular-formly.com/" target="_blank">Angular Formly</a> to customise and render forms and 
      I have gained experience in creating custom formly components, such as file uploads and quills. It also makes use of form wizards to
      improve user experience using the library <a href="https://github.com/madoar/angular-archwizard" target="_blank">Angular-Archwizard</a>.`,
      `Using the <a href="https://loopback.io/doc/index.html" target="_blank">Loopback</a> framework allows auto-generation of most common
       methods, however I have added plenty of custom methods and event hooks. The API also includes storing and retrieving images with Amazon S3 and 
       creating PDFs using <a href="https://wkhtmltopdf.org/" target="_blank">WKHTML2PDF</a>.`
    ]
  },
  {
    id: 2,
    h1: 'Time Management',
    h3: 'Angular 2, Loopback 2, MySql',
    text: [
      `An app for managing projects including functionality such as creating tasks, assigning them to available workers, completing them and 
      communicating changes and delays to project managers via email.`,
      `On this project I primarily worked on the UI, using <a href="https://angular.io/" target="_blank">Angular 2</a>. This included a custom-built 
      Gantt Chart component, used for displaying staff availability as well as project details. I also created a custom calendar component 
      to be used for scheduling staff holidays.`,
      `On this project the design is based on the <a href="https://material.angular.io/" target="_blank">Angular Material</a> library, which 
      gave me experience in a different UI style to <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a>, which is more commonly 
      used on the projects I have worked on.`
    ]
  },
  {
    id: 3,
    h1: 'Online Magazines',
    h3: 'Angular 5, NestJS, MySql',
    text: [
      `A project to automate the creation of editions for a online magazine service, changing the business flow from
      manual uploading of client content by website staff to generating all the content directly from client input.`,
      `For this project I worked with <a href="http://ngrx.github.io/" target="_blank">NGRX</a> (a redux-style store) on the front-end but 
      also implemented the API for generating the necessary files and images using <a href="https://nestjs.com/" target="_blank">NestJS</a>.`,
      `The front end for this project entailed adding to the existing client portal to allow clients to manage their uploads. This included
      creating and customising forms using <a href="https://formly-js.github.io/ngx-formly/" target="_blank">Angular Formly</a> and managing
      file uploads.`
    ]
  },
  {
    id: 4,
    h1: 'Recruiting Event Staff',
    h3: 'StencilJS, Yii2, MySql',
    text: [
      `I have been working on several aspects of a large site specialised in providing temporary staff for events such as music
      festivals. Firstly, I worked on coding up static landing pages for the site, following responsive designs and utilising 
      <a href="http://www.dustjs.com/" target="_blank">Dust.js</a> to generate pages from template layouts and content files to avoid replication.`,
      `Secondly, I have recently finished a widget for managing staff expenses written using <a href="https://stenciljs.com/" target="_blank">StencilJS</a>, 
      a super-light framework for writing web components which polyfills any gaps in browser compatibility. I found it really interesting to develop a complex
      component using only native browser methods and it was a great learning experience. I missed certain goodies that Angular would
      have given me, but would definitely consider using it again on a similar task.`
    ]
  },
  {
    id: 5,
    h1: 'Supply Chain',
    h3: 'Angular 5, Loopback 2, MySQL',
    text: [
      `A client portal for managing stock orders for children's clothes shops. This site allows clients to view available and upcoming 
      stock and place provisional orders. It also enables administrative users to manage client orders, accounts and stock.`,
      `The frontend, which has been upgraded to <a href="https://angular.io/" target="_blank">Angular 5</a>, is an example of a "fat client"
      architecture, with the frontend performing much of the data processing. This is in contrast to most of the other projects I have
      worked on, in which the client mainly serves to render data processed by the server.`,
      `I also worked on the <a href="https://loopback.io/doc/en/lb2/index.html" target="_blank">Loopback 2</a> API for this project, 
      integrating custom methods with an existing role resolver to dynamically manage user permissions.`
    ]
  },
  {
    id: 6,
    h1: 'Portfolio',
    h3: 'VueJS, Webpack 4',
    text:
      [
        `So yes, this is the website you're currently viewing. However, I wanted to include it in my portfolio as it is the first project
        I have created completely from scratch, using plenty of new tools along the way. Although I always rely on 
        <a href="https://webpack.js.org/" target="_blank">webpack</a> in my day-to-day work, I hardly knew anything about it - 
        <a href="https://cli.angular.io/" target="_blank">Angular-CLI</a> handles that for me - so in this project I decided to learn what 
        it has been doing for me all this time and configure it myself.`,
        `I also wanted to try creating an app using a front-end framework I hadn't used before so I chose 
        <a href="https://vuejs.org/" target="_blank">Vue.js</a>. So far so good - it feels a lot lighter than Angular and I like the template 
        syntax a lot, but I'm not totally convinced yet.`,
        `My plan is to re-code a version of this same site in Angular too (and perhaps React and StencilJS) so I can really compare them.`
      ]
  }
];
