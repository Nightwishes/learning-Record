## call,apply的区别?谁性能更好?

call和apply都可以修改this的指向,它们的区别在于参数的接受了,它们第一个参数都是要修改的this,call第二个参数往后就是要接受的参数。apply是将参数放在一个数组里,这个数组作为apply的第二个参数


call的性能比apply好