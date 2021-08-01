declare namespace com.foo {
  function bonjour(opt_data?: { [key: string]: any }): any;
}

document.write(com.foo.bonjour());