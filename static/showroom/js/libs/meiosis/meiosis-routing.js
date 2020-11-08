(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.MeiosisRouting = factory());
}(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  /**
   * `meiosis-routing/state`
   *
   * The `state` module contains functions for managing routes in the application state.
   *
   * @module state
   */

  /**
   * Route segment params.
   */

  /**
   * A route segment.
   */

  /**
   * A function that creates a [[RouteSegment]] with optional params.
   */

  /**
   * A Route is an array of route segments.
   */

  /**
   * Convenience route segment lookup for route transitions.
   */

  /**
   * The route transition indicates the [[Route]] that the user is leaving, to which they are
   * arriving, and for which parameters have changed.
   */

  /**
   * Routing instance with navigation objects and functions.
   */
  ////////
  // fastDeepEqual credit: https://github.com/epoberezkin/fast-deep-equal
  // This version does not handle Date and RegExp, because we shouldn't have those types when
  // parsing a URL string.
  var isArray = Array.isArray;
  var keyList = Object.keys;
  var hasProp = Object.prototype.hasOwnProperty;

  var fastDeepEqual = function fastDeepEqual(a, b) {
    if (a === b) return true;

    if (a && b && _typeof(a) == "object" && _typeof(b) == "object") {
      var arrA = isArray(a),
          arrB = isArray(b);

      var i, length, _key;

      if (arrA && arrB) {
        length = a.length;
        if (length != b.length) return false;

        for (i = length; i-- !== 0;) {
          if (!fastDeepEqual(a[i], b[i])) return false;
        }

        return true;
      }

      if (arrA != arrB) return false;
      var keys = keyList(a);
      length = keys.length;
      if (length !== keyList(b).length) return false;

      for (i = length; i-- !== 0;) {
        if (!hasProp.call(b, keys[i])) return false;
      }

      for (i = length; i-- !== 0;) {
        _key = keys[i];
        if (!fastDeepEqual(a[_key], b[_key])) return false;
      }

      return true;
    }

    return a !== a && b !== b;
  };

  var defaultEmpty = function defaultEmpty(route) {
    return Array.isArray(route) ? route : [];
  };
  /**
   * Creates a `Route` helper with functions to create route segments.
   *
   * @param routeNames the list of route names.
   * @returns a `Route` object with constructor functions.
   *
   * @example
   *
   * ```
   *
   * const Route = createRouteSegments(["Home", "User"]);
   *
   * Route.Home()
   * // { id: "Home", params: {} }
   *
   * Route.User({ name: "duck" })
   * // { id: "User", params: { name: "duck" } }
   * ```
   */


  function createRouteSegments(routeNames) {
    return routeNames.reduce(function (result, id) {
      result[id] = function (params) {
        return {
          id: id,
          params: params == null ? {} : params
        };
      };

      return result;
    }, {});
  }
  /**
   * Looks for a route segment, with matching params, in a route.
   *
   * @param route the route to search.
   * @param routeSegmentWithParams the route segment to search for in the route.
   * @returns the matching Route segment, or `undefined` if `route` is empty or the route segment
   * was not found.
   */

  function findRouteSegmentWithParams(route, routeSegmentWithParams) {
    return defaultEmpty(route).find(function (routeSegment) {
      return routeSegment.id === routeSegmentWithParams.id && fastDeepEqual(routeSegment.params, routeSegmentWithParams.params);
    });
  }
  /**
   * Looks for a Route segment, regardless of the params, in a route.
   *
   * @param route the route to search.
   * @param id the route segment, or just the id of the route segment, to search for in the route.
   * @returns the matching Route segment, or `undefined` if `route` is empty or a route segment with
   * the given id was not found.
   */

  function findRouteSegment(route, id) {
    var findId = id.id || id;
    return defaultEmpty(route).find(function (routeSegment) {
      return routeSegment.id === findId;
    });
  }
  /**
   * Calculates the difference between two routes.
   *
   * @param from
   * @param to
   * @returns the route representing the segments that are in the `from` route but not in the `to`
   * route.
   */

  function diffRoute(from, to) {
    var init = {};
    return defaultEmpty(from).reduce(function (result, fromRouteSegment) {
      if (findRouteSegmentWithParams(to, fromRouteSegment) === undefined) {
        result[fromRouteSegment.id] = fromRouteSegment;
      }

      return result;
    }, init);
  }
  /**
   * Calculates route transitions, providing `leave`, `arrive`, and `params` to indicate the route
   * segments for the route that we are leaving, the route to which we are arriving, and the route
   * for which params have changed, respectively.
   *
   * @param currentRoute the current route, before navigation.
   * @param nextRoute the route to which we are navigating.
   * @returns an object with `leave`, `arrive`, and `params` properties.
   */

  function routeTransition(currentRoute, nextRoute) {
    return {
      leave: diffRoute(currentRoute, nextRoute),
      arrive: diffRoute(nextRoute, currentRoute)
    };
  }
  /**
   * Calls a function with a value only if the value is not `null` or `undefined`.
   *
   * @param value the value to check.
   * @param fn the function to call if `value` is present.
   * @returns the result of calling `fn(value)`, or `null` if `value` is absent.
   */

  function whenPresent(value, fn) {
    return value != null ? fn(value) : null;
  }
  /**
   * @constructor [[RoutingObject]]
   *
   * @param route the current route, for example `state.route.current`.
   * @param index the route segment index. This is used internally and you should not specify a value
   * for this parameter.
   *
   * @example
   *
   * ```
   *
   * // in root component
   * const Root = ({ state }) => {
   *   const routing = Routing(state.route.current);
   *   const Component = componentMap[routing.localSegment.id];
   *
   *   return (
   *     <div>
   *       <Component // other props... // routing={routing} />
   *     </div>
   *   );
   * };
   *
   * // in child component
   * const Child = ({ state, routing }) => {
   *   const Component = componentMap[routing.childSegment.id];
   *   const params = routing.localSegment.params;
   *
   *   return (
   *     <div>
   *       <a href={router.toPath(routing.parentRoute())}>...</a>
   *       <a href={router.toPath(routing.childRoute(Route.Child()))}>...</a>
   *       <a href={router.toPath(
   *         routing.siblingRoute([Route.Sibling(), Route.Details()])
   *       )}>...</a>
   *
   *       <Component // other props... // routing={routing.next()} />
   *     </div>
   *   );
   * };
   * ```
   */

  function Routing() {
    var route = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return {
      route: route,
      index: index,
      localSegment: route[index] === undefined ? {
        id: "",
        params: {}
      } : route[index],
      childSegment: route[index + 1] === undefined ? {
        id: "",
        params: {}
      } : route[index + 1],
      next: function next() {
        return Routing(route, index + 1);
      },
      parentRoute: function parentRoute() {
        return route.slice(0, index);
      },
      childRoute: function childRoute(child) {
        return route.slice(0, index + 1).concat(child);
      },
      siblingRoute: function siblingRoute(sibling) {
        return route.slice(0, index).concat(sibling);
      },
      sameRoute: function sameRoute(params) {
        return route.slice(0, index).concat({
          id: route[index].id,
          params: params
        }).concat(route.slice(index + 1));
      }
    };
  }

  var state = /*#__PURE__*/Object.freeze({
    __proto__: null,
    createRouteSegments: createRouteSegments,
    findRouteSegmentWithParams: findRouteSegmentWithParams,
    findRouteSegment: findRouteSegment,
    diffRoute: diffRoute,
    routeTransition: routeTransition,
    whenPresent: whenPresent,
    Routing: Routing
  });

  /**
   * `meiosis-routing/router-helper`
   *
   * The `router-helper` module contains functions for creating a router by plugging in a router
   * library.
   *
   * @module routerHelper
   */

  /**
   * Route configuration. This is an Object for which the properties are the ids of the route
   * segments, and the values are either:
   *
   * - a string: the route path. May contain `:` for path parameters. May also contain `?` and/or `&`
   *   for query string parameters.
   * - an array: `[path, nestedConfig]` or `[path, inheritArray, nestedConfig]`.
   *
   * @example
   *
   * ```
   *
   * const routeConfig = {
   *   Home: "/",
   *   User: ["/user/:name?param1", {
   *     Profile: "/profile?param2&param3",
   *     Preferences: ["/preferences", ["name"]]
   *   }]
   * };
   * ```
   */

  /**
   * Function that parses a path and returns a route.
   *
   * @param path the path to parse.
   * @param queryParams an object with the query string parameters, if any are present.
   * @returns the route obtained from the path and parameters.
   */

  /**
   * Function that creates a function to parse a path.
   *
   * @param routeMap an object with key-value pairs.
   * @param defaultRoute the default route.
   * @returns the function that parses a path.
   */

  /**
   * Router configuration.
   */

  /** Represents a function that takes params and produces a [[Route]]. */

  /** Object that maps paths to route functions. */

  /**
   * Represents a router, which provides properties and functions to manage route paths.
   */
  ////////
  var getPathWithoutQuery = function getPathWithoutQuery(path) {
    return path.replace(/\?.*/, "");
  };

  var getQuery = function getQuery(path) {
    var idx = path.indexOf("?");
    return idx >= 0 ? path.substring(idx + 1) : "";
  };

  var extractMatches = function extractMatches(matches) {
    if (matches) {
      return matches.map(function (param) {
        return param.substring(1);
      });
    } else {
      return [];
    }
  };

  function findPathParams(path) {
    return extractMatches(path.match(/:[^/?]*/g));
  }
  function findQueryParams(path) {
    return extractMatches(path.match(/[?&][^?&]*/g));
  }
  function setParams(path, params) {
    return findPathParams(path).reduce(function (result, pathParam) {
      var value = encodeURI(params[pathParam] || "");
      var key = ":" + pathParam;
      var idx = result.indexOf(key);
      return result.substring(0, idx) + value + result.substring(idx + key.length);
    }, getPathWithoutQuery(path));
  }

  var getConfig = function getConfig(config) {
    return config == null ? ["/", [], {}] : typeof config === "string" ? [config, [], {}] : config.length === 2 ? Array.isArray(config[1]) ? [config[0], config[1], {}] : [config[0], [], config[1]] : config;
  };

  var pick = function pick(obj, props) {
    return props.reduce(function (result, prop) {
      if (obj[prop] != null) {
        result[prop] = obj[prop];
      }

      return result;
    }, {});
  };

  function convertToPath(routeConfig, routeOrRoutes, qsStringify) {
    var path = "";
    var lookup = routeConfig;
    var query = {};
    var routes = Array.isArray(routeOrRoutes) ? routeOrRoutes : [routeOrRoutes];
    routes.forEach(function (route) {
      var _getConfig = getConfig(lookup[route.id]),
          _getConfig2 = _slicedToArray(_getConfig, 3),
          configPath = _getConfig2[0],
          _parentParams = _getConfig2[1],
          children = _getConfig2[2];

      path += setParams(configPath, route.params);
      lookup = children;
      var queryParams = findQueryParams(configPath);
      query = Object.assign(query, pick(route.params, queryParams));
    });

    if (Object.keys(query).length > 0 && typeof qsStringify === "function") {
      path += "?" + qsStringify(query);
    }

    return path;
  } // Returns { "/path": fn(params) => [route] }

  function createRouteMap() {
    var routeConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var fn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (_none) {
      return [];
    };
    var acc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    return Object.entries(routeConfig).reduce(function (result, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          id = _ref2[0],
          config = _ref2[1];

      var _getConfig3 = getConfig(config),
          _getConfig4 = _slicedToArray(_getConfig3, 3),
          configPath = _getConfig4[0],
          parentParams = _getConfig4[1],
          children = _getConfig4[2];

      var routeParams = findPathParams(configPath).concat(findQueryParams(configPath)).concat(parentParams);
      var localPath = path + getPathWithoutQuery(configPath);

      var routeFn = function routeFn(params) {
        return fn(params).concat({
          id: id,
          params: pick(params, routeParams)
        });
      };

      result[localPath] = routeFn;
      createRouteMap(children, localPath, routeFn, result);
      return result;
    }, acc);
  }
  /**
   * Generic function to create a router from a router library of your choice.
   *
   * To use this function, write a `createXYZRouter` function that in turn calls `createRouter`.
   * All config parameters except for `createParsePath` are normally passed-thru from
   * `createXYZRouter` to `createRouter`, unless you want to define specific implementations of
   * `getPath`, `setPath`, and/or `addLocationChangeListener`.
   *
   * The key parse is `createParsePath`. This is where you define how to plug in to the router
   * library of your choice.
   *
   * `function createParsePath(routeMap, defaultRoute)` receives a `routeMap` which is an object
   * with
   *
   * @param config
   * @returns the created router.
   *
   * @example
   *
   * ```
   *
   * // Example of a createParsePath function with feather-route-matcher
   * const createParsePath = (routeMap, defaultRoute) => {
   *   const routeMatcher = createRouteMatcher(routeMap);
   *
   *   const parsePath = (path, queryParams) => {
   *     const match = routeMatcher(path);
   *
   *     if (match) {
   *       return match.value(Object.assign({}, match.params, queryParams));
   *     } else {
   *       return defaultRoute;
   *     }
   *   };
   *   return parsePath;
   * };
   * ```
   */

  function createRouter(config) {
    var routeConfig = config.routeConfig,
        createParsePath = config.createParsePath,
        defaultRoute = config.defaultRoute;
    var prefix = config.prefix != null ? config.prefix : "#";
    var getPath = config.getPath === undefined ? function () {
      return document.location.hash || prefix + "/";
    } : config.getPath;
    var setPath = config.setPath === undefined ? function (path) {
      return window.history.pushState({}, "", path);
    } : config.setPath;
    var queryString = config.queryString || {};

    var addLocationChangeListener = config.addLocationChangeListener || function (listener) {
      window.onpopstate = listener;
    };

    var routeMap = createRouteMap(routeConfig);
    var parsePathFn = createParsePath ? createParsePath(routeMap, defaultRoute) : null;
    var parsePath = parsePathFn ? function (pathWithPrefix) {
      var path = pathWithPrefix.substring(prefix.length);
      var query = getQuery(path);
      var queryParams = query.length === 0 || !queryString.parse ? {} : queryString.parse(query);
      return parsePathFn(getPathWithoutQuery(path), queryParams);
    } : function () {
      return [];
    };

    var toPath = function toPath(route) {
      return prefix + convertToPath(routeConfig, route, queryString.stringify);
    }; // Function to keep the location bar in sync


    var locationBarSync = function locationBarSync(route) {
      var path = toPath(route);

      if (getPath() !== path) {
        setPath(path);
      }
    }; // Listen to location changes and call navigateTo()


    var start = function start(_ref3) {
      var navigateTo = _ref3.navigateTo;

      var parsePathAndNavigate = function parsePathAndNavigate() {
        return navigateTo(parsePath(getPath()));
      };

      addLocationChangeListener(parsePathAndNavigate);
    };

    var initialRoute = parsePath ? parsePath(getPath()) : undefined;
    return {
      initialRoute: initialRoute,
      locationBarSync: locationBarSync,
      parsePath: parsePath,
      routeMap: routeMap,
      start: start,
      toPath: toPath
    };
  }
  /**
   * Creates a router using
   * [feather-route-matcher](https://github.com/HenrikJoreteg/feather-route-matcher).
   *
   * @param config
   *
   * @example
   *
   * ```
   *
   * import createRouteMatcher from "feather-route-matcher";
   * import queryString from "query-string"; // only if using query strings
   *
   * const Route = createRouteSegments([...]);
   *
   * const routeConfig = { ... };
   *
   * const router = createFeatherRouter({
   *   createRouteMatcher,
   *   routeConfig,
   *   defaultRoute: [Route.Home()],
   *   queryString // only if using query strings
   * });
   * ```
   */

  function createFeatherRouter(config) {
    var createParsePath = function createParsePath(routeMap, defaultRoute) {
      var routeMatcher = config.createRouteMatcher(routeMap);

      var parsePath = function parsePath(path, queryParams) {
        var match = routeMatcher(path);

        if (match) {
          var _params = Object.keys(match.params || {}).reduce(function (result, key) {
            result[key] = decodeURI(match.params[key]);
            return result;
          }, {});

          return match.value(Object.assign({}, _params, queryParams));
        } else {
          return defaultRoute;
        }
      };

      return parsePath;
    };

    return createRouter(Object.assign({
      createParsePath: createParsePath
    }, config));
  }
  /**
   * Creates a router using
   * [url-mapper](https://github.com/cerebral/url-mapper).
   *
   * @param config
   *
   * @example
   *
   * ```
   *
   * import Mapper from "url-mapper";
   * import urlon from "urlon"; // only if using query strings
   *
   * const Route = createRouteSegments([...]);
   *
   * const routeConfig = { ... };
   *
   * const router = createUrlMapperRouter({
   *   Mapper,
   *   routeConfig,
   *   defaultRoute: [Route.Home()],
   *   queryString: urlon // only if using query strings
   * });
   * ```
   */

  function createUrlMapperRouter(config) {
    var createParsePath = function createParsePath(routeMap, defaultRoute) {
      var urlMapper = config.Mapper();

      var parsePath = function parsePath(path, queryParams) {
        var matchedRoute = urlMapper.map(path, routeMap);

        if (matchedRoute) {
          return matchedRoute.match(Object.assign({}, matchedRoute.values, queryParams));
        } else {
          return defaultRoute;
        }
      };

      return parsePath;
    };

    return createRouter(Object.assign({
      createParsePath: createParsePath
    }, config));
  }
  /**
   * Creates a router using [Mithril Router](https://mithril.js.org/route.html).
   *
   * @param config
   *
   * @example
   *
   * ```
   *
   * import m from "mithril";
   * // Note: query strings are built-in to Mithril
   *
   * const Route = createRouteSegments([...]);
   *
   * const routeConfig = { ... };
   *
   * const router = createMithrilRouter({
   *   m,
   *   routeConfig
   * });
   * ```
   */

  function createMithrilRouter(config) {
    var queryString = {
      stringify: config.m.buildQueryString
    };
    var router = createRouter(Object.assign({
      prefix: "#!",
      queryString: queryString
    }, config));

    router.MithrilRoutes = function (_ref4) {
      var states = _ref4.states,
          actions = _ref4.actions,
          App = _ref4.App;
      return Object.entries(router.routeMap).reduce(function (result, _ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
            path = _ref6[0],
            fn = _ref6[1];

        result[path] = {
          onmatch: function onmatch(params) {
            return actions.navigateTo(fn(params));
          },
          render: function render() {
            return config.m(App, {
              state: states(),
              actions: actions
            });
          }
        };
        return result;
      }, {});
    };

    return router;
  }

  var routerHelper = /*#__PURE__*/Object.freeze({
    __proto__: null,
    findPathParams: findPathParams,
    findQueryParams: findQueryParams,
    setParams: setParams,
    convertToPath: convertToPath,
    createRouteMap: createRouteMap,
    createRouter: createRouter,
    createFeatherRouter: createFeatherRouter,
    createUrlMapperRouter: createUrlMapperRouter,
    createMithrilRouter: createMithrilRouter
  });

  var index = {
    state: state,
    routerHelper: routerHelper
  };

  return index;

})));
