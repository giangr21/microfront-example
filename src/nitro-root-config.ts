import { Application, registerApplication, start } from "single-spa";

interface IApp {
  name: string;
  app: Application<{}>;
  activeWhen: any;
}

const applications: IApp[] = [
  {
    name: "@single-spa/welcome",
    app: () =>
      System.import(
        "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
      ),
    activeWhen: (location) => location.pathname === "/",
  },
  {
    name: "@nitro/dashboard",
    app: () => System.import("@nitro/dashboard"),
    activeWhen: ["/dashboard"],
  },
  {
    name: "@nitro/parcel",
    app: () => System.import("@nitro/parcel"),
    activeWhen: ["/parcel"],
  },
];

applications.forEach(({ name, app, activeWhen }) => {
  registerApplication({
    name,
    app,
    activeWhen,
  });
});

start({
  urlRerouteOnly: true,
});
