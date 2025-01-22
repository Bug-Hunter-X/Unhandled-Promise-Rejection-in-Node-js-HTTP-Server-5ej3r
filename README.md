# Unhandled Promise Rejection in Node.js HTTP Server

This repository demonstrates a common error in Node.js applications: unhandled promise rejections.  The provided code simulates an HTTP server that performs an asynchronous operation (fetching data).  The operation can either succeed or fail randomly.  Without proper error handling, a failed operation will cause the server to crash silently, which may be hard to debug.

The `bug.js` file contains the flawed code, while `bugSolution.js` provides a corrected version that addresses the issue using `try...catch` and `.catch` for better error management.