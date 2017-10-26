# 个人阅读轨迹 individual book tracking
这是一个书架web应用，你可以选择并分类你所阅读过的书，以及正在阅读或想要阅读的书。这个应用使用react构建，在你与应用的交互过程中，是使用一个服务接口和客户端库来保存信息的。
A bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.


## Installing
git clone https://github.com/meiyouqing/book-tracking.git

cd book-tracking

npm install or yarn

## Launching
npm start or yarn start

## Specifications
1) In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

Currently Reading

Want to Read

Read

2) Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. Note that the default value for the control should always be the current shelf the book is in.

3) The main page also has a link to /search, a search page that allows you to find books to add to your library.

4) The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library. To keep the interface consistent, you may consider re-using some of the code you used to display the books on the main page.

5) When a book is on a bookshelf, it should have the same state on both the main application page and the search page.

6) The search page also has a link to / (the root URL), which leads back to the main page.

7) When you navigate back to the main page from the search page, you should instantly see all of the selections you made on the search page in your library.
