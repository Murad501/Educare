import React from "react";

const Blog = () => {
  return (
    <div className="lg:px-4">
      <h1 className="text-5xl text-center mb-4 font-bold">Blog</h1>
      <div className="my-5">
        <h2 className="text-2xl font-bold">What is CORS?</h2>
        <p className="text-xl">
          <span className="text-xl font-bold">Ans:</span> Cross-Origin Resource
          Sharing (CORS) is an HTTP-based security mechanism controlled and
          enforced by the client (web browser). It allows a service (API) to
          indicate any origin other than its own from which the client can
          request resources. It has been designed in response to the same-origin
          policy (SOP) that restricts how a website (HTML document or JS script)
          loaded by one origin can interact with a resource from another origin.
          <br />
          CORS is used to explicitly allow some cross-origin requests while
          rejecting others. CORS is implemented primarily in web browsers, but
          it can also be used in API clients as an option. It's present in all
          popular web browsers like Google Chrome, Firefox, Opera, and Safari.
          The standard has been accepted as a W3C Recommendation in January
          2014. Based on that, we can assume that it is implemented in all
          currently available and other than listed web browsers.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-bold">Why are you using Firebase?</h2>
        <div className="text-xl">
          <span className="text-xl font-bold">Ans:</span>
          <div className="mb-4">
            <h3 className="text-2xl">Database capabilities</h3>
            <p className="text-xl">
              While it always depends on your budget, Google suggests pretty
              robust databases to use with your apps. Both Realtime and
              Firestore can be scaled in terms of the size, suggesting a fully
              secure managed solution, that still provides you easy access to
              your data via Firebase console. Data updates and offline access
              make databases usable for real time application, as well as
              keeping multiple DBs in sync.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl">Wide number of services</h3>
            <p className="text-xl">
              Firebase suggest a lot of products to make your application work.
              You can choose between two databases (Realtime database and
              Firestore), store media in the cloud, and even build serverless
              applications with the help of integrated Cloud Functions.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl">Free Start</h3>
            <p className="text-xl">
              As you begin, Firebase will require no payments for most of its
              services, and would be totally free as you start with it. This
              will allow you to understand whether it fits your application, and
              understand all the peculiarities. Once you reach a certain amount
              of database memory or need a specific service, you can always
              choose between the plans. The pricing page contains a price
              calculator, that can be regulated by different parameters, as it’s
              a usual practice for cloud services.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl">Concise documentation</h3>
            <p className="text-xl">
              The whole platform is documented with diligence. Good technical
              documentation, API documentation, SDK references, all that makes
              any product easier to use and accessible for the user. Exploring
              Firebase product page you will find that it contains all the
              required information concerning integrations, available platforms,
              guidances, and lists of supported technologies. Moreover you can
              check Firebase YouTube channel that seems pretty active in terms
              of releasing new videos and news.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl">Accessible UI and ease of integration</h3>
            <p className="text-xl">
              In most cases, Firebase requires minimal programming language
              knowledge, and suggests integrations via its user interface. While
              somebody can call it a downside for flexibility, on the other hand
              it eliminates the need for complex configurations, so nearly
              anyone can set up the application.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl">Static hosting capabilities</h3>
            <p className="text-xl">
              Firebase hosting comes with a Content Delivery Network (CDN)
              in-built with Google Cloud platform. Basically, a CDN is a network
              of distributed servers, that guarantee fast content delivery
              across the globe. In the case of Firebase, using its static
              hosting makes it easy to build one-pagers or web-apps with ease.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-bold">
              What other options do you have to implement authentication?
            </h3>
            <p className="text-xl">
              <span className="text-xl font-bold">Ans:</span>
              Usually, authentication by a server entails the use of a user name
              and password. Other ways to authenticate can be through cards,
              retina scans, voice recognition, and fingerprints.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-bold">
              How does the private route work?
            </h3>
            <p className="text-xl">
              <span className="text-xl font-bold">Ans:</span>
              The react private route component renders child components (
              children ) if the user is logged in. If not logged in the user is
              redirected to the /login page with the return url passed in the
              location state property.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-bold">What is Node?</h3>
            <p className="text-xl">
              <span className="text-xl font-bold">Ans:</span>
              Node.js is an open-source backend javascript runtime environment.
              It is a used as backend service where javascript works on the
              server-side of the application. This way javascript is used on
              both frontend and backend. Node.js runs on chrome v8 engine which
              converts javascript code into machine code, it is highly scalable,
              lightweight, fast, and data-intensive.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-bold">How does Node work?</h3>
            <p className="text-xl">
              <span className="text-xl font-bold">Ans:</span>
              Node.js accepts the request from the clients and sends the
              response, while working with the request node.js handles them with
              a single thread. To operate I/O operations or requests node.js use
              the concept of threads. Thread is a sequence of instructions that
              the server needs to perform. It runs parallel on the server to
              provide the information to multiple clients. Node.js is an event
              loop single-threaded language. It can handle concurrent requests
              with a single thread without blocking it for one request.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
