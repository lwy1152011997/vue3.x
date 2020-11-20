declare module '*.vue' {
  /* eslint-disable */
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

/**
 * 这个文件就告诉了ts 以.vue结尾的文件是什么类型的
 * 这个文件的目的简单理解就是TS为vue创建的一个定义文件, 因为以.vue结尾的文件在vue中它是不认可的
 *
 * 对 declare 关键字的理解
 * declare 定义的类型只会用于编译时的检查，编译结果中会被删除。
 * 在开发过程中我们不可避免的要引用到其他第三方的 JS 的库。虽然我们可以通过直接引用调用库的类和方法，
 * 但是却无法使用TypeScript 的类型检查等特性功能。
 * 为了解决这个问题，需要将这些库里的函数和方法去掉后只保留导出类型声明，
 * 而产生了一个描述 JavaScript 库和模块信息的声明文件。
 * 通过引用这个声明文件，就可以借用 TypeScript 的各种特性来使用库文件了。
 * 例如:我们想使用第三方库jQuery:
 *    $('#foo');或者 jQuery('#foo');
 * 但是在TS中它并不识别这个库是什么东西
 * 我们需要:
 *    declare const jQuery: (selector: string) => any;
 * 再使用:
 * jQuery('#foo');
 * */