import { Component } from "react";
import { NextPage, NextPageContext } from "next";
import { getCookie } from "cookies-next";
import Router from "next/router";

import { HOME } from "src/constants/paths";

const authenticate = (context: NextPageContext) => {
  const name = getCookie("name", context);

  // check if cookie present
  // if not present, redirect user to login page
  if (typeof window === "undefined") {
    if (context.req && !name) {
      context?.res?.writeHead(302, { Location: HOME });
      context?.res?.end();
    }
  } else if (!name) {
    Router.replace(HOME);
  }

  return name;
};

export const withAuth = (WrappedComponent: NextPage) =>
  class extends Component {
    static async getInitialProps(context: NextPageContext) {
      authenticate(context);

      const componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(context));

      return {
        ...componentProps,
      };
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
