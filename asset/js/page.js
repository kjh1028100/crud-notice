/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/js/page.js":
/*!*******************************!*\
  !*** ./src/client/js/page.js ***!
  \*******************************/
/***/ (() => {

eval("const fakeDocument = document.createDocumentFragment();\nconst pageContainer = document.querySelector(\".page__cotainer\");\nconst noticeContainer = document.querySelector(\".notice_container\");\nlet controller;\nconst baseCount = 3;\nlet clicked = false;\n\nfunction paintNotice(notice) {\n  noticeContainer.innerText = \"\";\n  const ul = document.createElement(\"ul\");\n\n  for (let i = 0; i < notice.length; i++) {\n    const li = document.createElement(\"li\");\n    const componentLi = document.createElement(\"li\");\n    const a = document.createElement(\"a\");\n    const span = document.createElement(\"span\");\n    const small = document.createElement(\"small\");\n    a.href = \"/notice/\".concat(notice[i]._id);\n    a.innerText = \"\".concat(notice[i].title);\n    componentLi.appendChild(a);\n    span.innerText = \"\\n    \".concat(notice[i].description, \"\\n    \").concat(notice[i].meta.views);\n    componentLi.appendChild(span);\n    small.innerText = \"\".concat(notice[i].createAt);\n    componentLi.appendChild(small);\n    li.appendChild(componentLi);\n    ul.appendChild(li);\n  }\n\n  fakeDocument.appendChild(ul);\n  noticeContainer.appendChild(fakeDocument);\n}\n\nasync function handlePageContainerClick(e) {\n  clicked = true;\n  const target = e.target.innerText.slice(0, 1);\n  const response = await (await fetch(\"/api/notice/page\", {\n    method: \"POST\",\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    body: JSON.stringify({\n      target,\n      baseCount\n    })\n  })).json();\n  console.log(response.targetNotice);\n  paintNotice(response.targetNotice);\n}\n\nfunction paintCount(totalCount) {\n  for (let i = 1; i <= totalCount; i++) {\n    const a = document.createElement(\"a\");\n    a.style.cursor = \"pointer\";\n    a.innerText = \"\".concat(i >= totalCount ? \"\".concat(i) : \"\".concat(i, \"|\"));\n    fakeDocument.appendChild(a);\n  }\n\n  pageContainer.appendChild(fakeDocument);\n}\n\nasync function getTotalCount() {\n  const response = await (await fetch(\"/api/notice/count\", {\n    method: \"POST\",\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    body: JSON.stringify({\n      baseCount\n    })\n  })).json();\n\n  if (response) {\n    const totalCount = Math.ceil(response);\n    paintCount(totalCount);\n  } else {\n    return;\n  }\n}\n\nfunction init() {\n  getTotalCount();\n  pageContainer.addEventListener(\"click\", handlePageContainerClick);\n}\n\ninit();\n\n//# sourceURL=webpack://notice/./src/client/js/page.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/page.js"]();
/******/ 	
/******/ })()
;