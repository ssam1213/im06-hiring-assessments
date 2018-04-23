# Hiring Assessments

## Before Starting

1. 모든 커뮤니케이션 도구들을 사용하지 마세요. (e.g. 휴대폰, 슬랙, 메신저 등)
2. 다른 사람들과 상의해서 풀지 마세요.
3. 점심식사는 시험시간 중간에 드시면 됩니다.
4. 이 repo 를 clone 하세요. 시험시간동안은 절대 여러분들의 작업물을 push 하지마세요. (시험 종료시간 10분전인 저녁 6시 50분부터 push 해주시기 바랍니다.)
5. Zoom 으로 화면 녹화를 시작하세요. [Zoom 녹화 가이드](https://docs.google.com/presentation/d/1HspUPg-vP28ZJmIQxvVtUzFJFRMWIr7T0ChoGzq2BCo/edit?usp=sharing) 를 참고하세요. 녹화된 영상은 구글 드라이브에 업로드 해주세요.

## Guidelines

- Hiring Assessments 를 하면서 지금까지 학습한 부분들을 얼마나 잘 이해했는지 판단할 수 있습니다.
- 반드시 모든 문제를 조금이라도 풀려고 시도하시길 바랍니다. 코드를 작성할 시간이 부족하더라도 코멘트를 남겨서 어떤 식으로 풀어가려고 했는지에 대해 작성하시기 바랍니다. 아예 한 문제에 대해서 아무것도 하지않고 그대로 두는것보다는 pseudocode 나 comment 를 작성하는 것이 훨씬 좋은 평가를 받게 될 것입니다.
- 시험 완료후 반드시 pull request 를 해야 합니다(아래 가이드라인 참고). 배정된 시간에서 pull request 를 할 시간을 꼭 가지길 바랍니다.
- 이전에 풀었던 코드를 그대로 참고해서 문제를 푸시면 안됩니다. 본인이 참고했던 자료나 글들은 모두 각 문제에 코멘트로 남겨주세요. (링크들을 첨부해주시면 됩니다.)

## Using and Referencing Outside Resources

너무 복잡한 부분은 어느정도 무시하고 빠르게 해결책을 찾아 만드는 것은 소프트웨어 엔지니어로서 개발하는데 필요한 스킬 입니다. 하지만 테스트는 그렇게 단순히 넘어가는 시간이 아닙니다. 테스트는 여러분들이 해결책을 만들어낼 수 있는 능력이 있는지 확인하는 것 뿐만 아니라, 여러분이 만든 해결책을 잘 이해하고 있는지 점검하는 시간입니다.

정직하지않게 시험을 보면, 여러분이 학습한 부분을 얼마나 잘 이해했는지 정확히 진단하기 어렵습니다. 여러분은 모든 문제들을 스스로 해결할 수 있도록 노력해야합니다. 자료를 참고하더라도 바로 해결책을 알려주는 자료는 참고하지 않도록 제한해야 합니다. 참고한 자료가 본인이 생각하기에 공정한 자료를 참고하지 않았다고 생각되는 경우는 그 자료의 링크를 복사해서 문제의 답안에 넣어주시기 바랍니다.

## Grading Outline

- [Complete ] algo-complexity
- [ Complete] async-word-count
- [Complete ] ds-queue
- [ Complete] html-log-input
- [ Complete] js-inheritance-pseudo-classical
- [ Mostly complete] no-sql-compare-sql
- [ Complete] node-post-reqs
- [ Complete] react-pond
- [ Complete] recursion-print-array
- [ Significant progress] sql-publisher-author-genre
- [ Attempted] testing-hash-table
- [ Complete] this-keyword
- [ Complete] underbar-each-filter

## Self-Grading Process

각각의 prompt 를 완료한 후, `README.md` 파일을 수정해서 grade 를 작성하시면 됩니다. 위의 Grading Outline 섹션의 [ ] 에 grade 를 스스로 매기시길 바랍니다. ([Grading Scale](/grading-outline.md) 를 참고)

## Javascript Syntax Check

`syntaxalyze.html` 이 포함되어 있습니다. 브라우저에서 `syntaxalyze.html` 을 열고 solution files 을 그 페이지에 드래그해서 놓으면 syntax check 를 합니다. 에러들이 나오면 모두 수정하시기 바랍니다. 에러들이 수정됐는지 알기 위해서는 solution files 을 매번 다시 드래그 해야합니다.(단순히 refresh 하는 것으로는 체크할 수 없습니다.)

## Submitting your Solutions

**VERY IMPORTANT: Solutions 을 제출하기전에 syntax erros 를 모두 수정하시기 바랍니다.**

Solutions 은 [Pull Request](https://help.github.com/articles/using-pull-requests) 를 통해 제출합니다. Follow these steps:

1. **여러분의 fork** 에서 `Pull Requests` 를 선택하고, `New pull request` 를 생성합니다.
2. Pull Request 의 comment block 에 Grading Outline 을 채워넣고 복사해 붙입니다. [grading-outline](/grading-outline.md) 참고
3. `Send pull request` 를 클릭합니다.

---

## Algorithm Complexity
* [ ] List and briefly describe the types of algorithmic complexity. Be as clear and complete as necessary to demonstrate your mastery.
* [ ] What time complexity do the given functions have (with respect to the size of the input `array`)?

## Async word count
Inside `async-word-count.js`, complete `getTotalWordCount`. `getTotalWordCount` should pass the combined word count of the files located at `filePathOne` and `filePathTwo` to the `callback` following proper node style convention

- [ ] Be sure to handle errors at each step
- [ ] Do not use promises

### Available Resources for this Prompt
* MDN
* Node docs

## Queue
* [ ] Implement a queue class.
  * Use an object for storage - _not_ an array.
  * The queue should not keep values that it no longer needs.
  * Insertion and removal should be _O(1) time complexity_

## HTML/CSS
* [ ] Create a basic HTML page with a text input & a submit button below it, both of which are centered (similar to the home page of Google). Do not use the `center` tag.
* [ ] Clicking the button should result in the text value from the input box being logged to the console.

## Pseudo-classical inheritance
* [ ] Refactor `makePhone` and `makeSmartphone` to use pseudo-classical inheritance
  * They should have all of the same methods as objects returned from the original maker functions provided
  * _Do not modify the factory functions - instead, use the constructor functions at the end of the file_

## Non-relational DB's
* [ ] List the main differences you can think of between relational and non-relational databases.

## Node
* [ ] Fill in the missing components of the provided HTTP server in `server.js` such that it can accept POST requests to "/hifive" and "/lowfive"
  * Serve up the appropriate image (provided) for each, on a successful `POST` request
  * __DON'T__ cheat by using the Sync versions of any Node.js functions.

## React

Create a fish pond in React:

* [ ] Install this prompts dependencies by running `npm install` from the root of this directory
* [ ] Start the app by running `npm start` from the root of this directory
* [ ] Refactor the `FishTable` and `FishTableRow` components to dynamically render the passed in `fishData`

### Available Resources for this Prompt
* React Docs
* MDN

## Recursion
* [ ] Print every number in an array of numbers, using recursion, not loops.

## SQL
Using [WWW SQL Designer](http://ondras.zarovi.cz/sql/demo/) or [DB designer](http://dbdsgnr.appspot.com/), draw the schema for the following data
* Create the following 3 tables (and any additional [junction tables](https://en.wikipedia.org/wiki/Junction_table) you might need) with the specified relationships:
  * [ ] publisher, has many authors, has one genre
  * [ ] author, has many publishers, has many genres
  * [ ] genre, has many publishers, has many authors
  * Be sure to include any foreign keys you will need, as columns of the tables you design
  * Export as an image and save to the `sql-publisher-author-genre` folder. To take a screen shot on a Mac, use the shortcut `Cmd+Shift+4` then drag a box around your desired image. The image will be saved to the desktop.
* [ ] Write an `INSERT` query that stores a new user record with a name, age, and location

## Testing
* [ ] Given a hash table implementation, write tests that provide decent coverage for the `insert` & `retrieve` functions.

## this keyword

- [ ] Follow the instructions in `this-keyword.js`

### Available Resources for this Prompt
  * MDN

## Underscore
  * [ ] Implement an `each()` function that works like underscore's each helper
    * Must handle passed-in arrays, objects, and strings as input values.
  * [ ] Using `each`, implement `filter()`
    * `filter()` returns an array of all the elements in the original collection that pass a truth test.
    * The first argument to `filter()` is a collection
    * The second argument is an iterator function, used as the truth test.
    * Example: `filter([3,4,5,6], function(number){ return number % 2; })` returns `[3,5]`
