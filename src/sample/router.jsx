import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Link,
} from "react-router-dom";
import { EjsRender, locations } from "../react-ejs";

function Header() {
  let require = locations("/src/sample");
  let data = [
    {
      name: "home",
      href: "./",
    },
    {
      name: "post",
      href: "/post",
    },
    {
      name: "about",
      href: "/about",
    },
  ];
  return <EjsRender path={require("/header.ejs")} data={{ data }} />;
}

export default function Router() {
  let require = locations("/src/sample");

  return (
    <>
      <BrowserRouter>
        <Header />
        <div style={{ padding: "10px" }} />
        <Routes>
          <Route index element={<EjsRender path={require("/home.ejs")} />} />
          <Route
            path="post"
            element={
              <EjsRender
                path={require("/post.ejs")}
                data={{
                  data: [
                    { href: "./article/1", name: "my first post" },
                    { href: "./article/2", name: "Lorem ipsum dolor" },
                  ],
                }}
              />
            }
          />
          <Route
            path="article/:id"
            element={<EjsRender path={require("/article.ejs")} />}
          />
          <Route
            path="about"
            element={<EjsRender path={require("/about.ejs")} />}
          />
          <Route path="*" element={<h1>404 Not Found </h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
