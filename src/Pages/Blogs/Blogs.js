import React from 'react';

const Blogs = () => {
    return (
        <div className='p-5'>
            <div>
                <h1 className='text-center border-bottom'>Blogs</h1>
            </div>
            <div>
                <div>
                    <h2>
                        1. Difference between javascript and nodejs?
                    </h2>
                    <p>
                        JavaScript is a programming language. But Node.js is iterpreter and environment for JS
                        JS utility is used for any client side activity for a web application and Node.js is used for accessing any non-blocking operation of any operating system.
                        JS running engines are spider monkey(firefox) , JS Core(Safari), V8(Google Chorme) etc . And Node.js running engine is V8(Google Chorme)
                        JS basically used for client side and Node.js is mostly used for client side.
                        JS projects are: Airbnb,Reddit,Instagram,Slack . And Node.js projects are Uber,Netflix,Twitter,Mediumcom
                    </p>
                </div>

                <div>
                    <h2>
                       2. When should you use nodejs and when should you use mongodb?
                    </h2>

                    <p>
                        1. When we will use node.js: Basiclly node.js used in server side to connectd database. If we need fast working working in a website we can use node.js. Node.js have easy scalability , high performance , full stack JS . Node.js have large community with extended support. Node.js is highly extensible. It's also have caching advantages . So in thoose perpuse we can use node.js.
                    </p>
                    <p>
                        2. MongoDB is a NoSQL Database. MongoDB have high performance and strong consistency . MongoDB is highly available .It's also agile flexible.MongoDB have single view, real time analysis , personalization.Fot CRUD operation MongoDB is best.For data store in Database we used MongoDB in server side . So in thoose perpuse we can use MongoDB.
                    </p>
                </div>

                <div>
                    <h2>
                        3. Differences between sql and nosql databases.
                    </h2>
                    <p>
                        SQL is a realtional database. NoSQL is non-realtional Database.
                        SQL is structured query language . NoSQL have unstructured data.
                        SQL are vertically scalable and NoSQL are horizontally scalable.
                        SQL data store table based. NoSQL data graph or wide-column stores.
                        SQL have predefined schema and NoSQL have dynamic schema;
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;