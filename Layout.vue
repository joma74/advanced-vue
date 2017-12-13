<template>
  <div class="flex flex-col h-screen">
    <slot name="header">
      <h1 class="text-red">Please add a header!</h1>
    </slot>
    <slot name="content">
      <div class="text-red flex-grow">Please add some content</div>
    </slot>
    <slot name="footer">
      <h2 class="text-red">Please add a footer!</h2>
    </slot>
  </div>
</template>