import React from "react";

const Breadcrumbs = ({ items }) => (
  <nav className="container" aria-label="breadcrumb">
    <ol className="breadcrumb">
      {items.map((item, index) => (
        <li
          key={index}
          className={`breadcrumb-item ${item.active ? "active" : "text-black"}`}
          aria-current={item.active ? "page" : undefined}
        >
          {item.active ? (
            item.label
          ) : (
            <a href={item.href} className="text-black-rock-Black no-underline hover:underline">
              {item.label}
            </a>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumbs;
