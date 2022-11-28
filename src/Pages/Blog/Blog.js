import React from 'react';



const Blog = () => {

    return (
        <div className='my-24'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    13.1 What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p>There are several other ways to manage state​s in React, When we talk about state in our applications, it’s important to be clear about what types of state actually matter.

                        There are four main types of state you need to properly manage in your React apps:

                        Local state
                        Global state
                        Server state
                        URL state
                        Let's cover each of these in detail:

                        Local (UI) state – Local state is data we manage in one or another component.

                        Local state is most often managed in React using the useState hook.

                        For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.

                        Global (UI) state – Global state is data we manage across multiple components.

                        Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                        A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

                        Sometimes state we think should be local might become global.

                        Server state – Data that comes from an external server that must be integrated with our UI state.

                        Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

                        There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

                        Fortunately there are tools such as SWR and React Query that make managing server state much easier.

                        URL state – Data that exists on our URLs, including the pathname and query parameters.

                        URL state is often missing as a category of state, but it is an important one.
                        In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!
                    </p>
                </div>
            </div>
            <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    13.2 How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                    </p>
                </div>
            </div>
            <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    13.3 What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                </div>
            </div>
            <div tabIndex={3} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    13.4 React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <p>Key Differences Between Angular.Js, React.Js And Vue.Js
                        Architecture
                        Speaking of architecture, Angular.js is a full-fledged MVC framework that provides you with all the possibilities for out-of-the-box programming:

                        Templates based on HTML;
                        Dependency injection;
                        Ajax requests;
                        Routing;
                        Encapsulation of CSS components;
                        Components testing utilities;
                        Opportunities to create forms, etc.
                        React.js, on the other hand, is a library that just offers the view, leaving the developer to decide how to construct the Model and Controller. The following features are provided:

                        As an add-on to JavaScript, the JSX language, which is similar to XML, is used instead of templates;
                        No introduction of dependencies;
                        Ajax requests;
                        Vue.js is a library that allows you to create interactive web interfaces. Vue.js is primarily concerned with the ViewModel layer of the MVVM architecture. It uses two-way data bindings to attach the View and the Model. Directives and Filters abstract away the actual DOM operations and output formatting.

                        Data Binding
                        Angular.js uses the two-way binding. The state of the model is changed first, and then the modification of the interface element is reflected. The interface element changes as the model’s state changes, which is why two-way data binding is used.

                        React.js has one-way binding. First, the state of the model is updated, and then it reflects the change of the interface element. If you change the interface element, the state of the model stays the same.

                        As on Angular, the data binding on Vue.js is two-way. Vue.js synchronizes the entire model with the DOM mechanically. This implies that all Vue.js templates are fundamentally legal, parsable HTML with a few extra features. Remember this because Vue templates are fundamentally different from string-based templates.

                        Mobile solutions
                        Each one of the three compared web development frameworks offers mobile solutions for apps development.

                        When it comes to Angular, this is the Ionic framework, which makes use of Angular’s Cordova container. You download the app, which is a web application running within a web browser.

                        React.js doesn’t have a similar framework. React Native is a platform for creating actual native mobile applications.

                        Vue has announced its support for the Alibaba Group’s Weex project, which is a cross-platform UI framework. Weex allows you to develop browser components as well as iOS and Android apps using the same Vue syntax.

                        Ease of learning
                        In the case of React.js, you need to learn JSX first, which is not a problem since it’s quite simple. Then you need to go through the routing library (react-router v4, for example) and then the state management libraries (Redux or MobX).

                        In the case of Angular, there are way more steps to make and information to learn. From basic terms (directives, modules, decorators, components, services, dependency inputs, pipes, and templates), this is followed by topics as change detection, zones, AoT compilation, and Rx.js.

                        And in the case of Vue.js, the fundamental features may be implemented in the first web applications in the least amount of time. Vue is simpler to understand than Angular or React since it is more adaptable. Furthermore, Vue’s functionality, such as the use of components, overlaps with that of Angular and React. Vue.js’s simplicity and adaptability, on the other hand, have a drawback: it enables poor code that is tough to debug and test.

                        Syntax
                        Angular is written in TypeScript, which means you need some time to learn it to work with this framework.

                        React uses JSX and native Javascript developers are familiar with it. The training period is easier and does not require that much preparation.

                        Vue.js makes use of an HTML-based template syntax that allows you to link the displayed DOM to the data of the base element instance declaratively. All Vue.js templates are valid HTML that can be read by HTML analyzers and browsers that follow the standard.

                        Integration
                        Angular provides a basic framework for building web applications and does not require any additional libraries. It is relatively rigid and inflexible as a complete framework.

                        React.js is usually not enough to build a web app. In most instances, using extra libraries is advised. As a result, it’s more adaptable and simple to integrate into current mobile apps.

                        Vue.js allows distinct features of an app to be implemented without altering the architecture. When it comes to integrating with other libraries, Vue is a perfect solution. Vue.js may be used to create both single-page apps and more complex online interfaces for apps.

                        Performance
                        To capture all changes to the DOM, Angular.js creates a watcher for each binding. Every time the view updates, the new values compare with the old ones. This can end up in poorer performance in large mobile applications.

                        Because React uses a virtual DOM, when the view is modified, the new DOM compares it to the virtual DOM and changes accordingly.

                        Vue.js has better performance thanks to the virtual DOM, which is useful for complicated programs. It may be as little as 20KB while maintaining its speed and versatility, allowing it to achieve considerably better performance than competing frameworks.

                        Ecosystem
                        The great thing about open source frameworks is that they provide developers with numerous tools or libraries. Thanks to the active community, there are a large number of extensions for Angular, React, and Vue that can be used:

                        For easier bootstrapping of a project;
                        For the development of apps;
                        For design matters;
                        For the administration of states.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;