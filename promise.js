'use strict';


const url = '.../courses/1/lessons/17';
const user = {
  id: 20,
  name: 'Misha'
};

const course = {
  id: 1,
  name: 'JS Basics'
};

const userCourseActivity = {
  startedAt: '2017-06-01',
  currentLessonId: 17,
};


function getUser(token, callback) {
  setTimeout(() => {
    callback(user);
  }, 1000);
}

function getCourse(courseId, callback) {
  setTimeout(() => {
    callback(course);
  }, 2000);
}



function getUserCourse(userId, courseId, callback) {
  setTimeout(() => {
    callback(userCourseActivity);
  }, 1500);
}



function getLesson(courseId, lessonId, callback) {
  setTimeout(() => {
    callback({
      title: 'Promises'
    });
  }, 1000);
}



let currentUser = null;
let currentCourse = null;
let isUserLoaded = false;
let isCourseLoaded = false;

getUser('51dca6a9001dd290ebb46168225371', (currentUser) => {
  isUserLoaded = true;

  if (isCourseLoaded) {
    load()
  }
});

getCourse(1, (currentCourse) => {
  isCourseLoaded = true;

  if (isUserLoaded) {
    load()
  }
});

function load(userId, courseId) {
  getUserCourse(currentUser.id, currentCourse.id, (currentActivity) => {

    getLesson(currentActivity.currentLessonId, (lesson) => {
      console.log('lesson is ready');
    });
  });
}







