<template>
  <div class="h-screen w-scren flex justify-center items-center">
    <svg width="90" height="90" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect class="spinner_9y7u" x="1" y="1" rx="1" width="10" height="10" fill="#007bff" />
      <rect
        class="spinner_9y7u spinner_DF2s"
        x="1"
        y="1"
        rx="1"
        width="10"
        height="10"
        fill="red"
      />
      <rect
        class="spinner_9y7u spinner_q27e"
        x="1"
        y="1"
        rx="1"
        width="10"
        height="10"
        fill="green"
      />
    </svg>
  </div>
</template>
<style scoped>
.spinner_9y7u {
  animation: spinner_fUkk 2.4s linear infinite;
  animation-delay: -2.4s;
}

.spinner_DF2s {
  animation-delay: -1.6s;
}

.spinner_q27e {
  animation-delay: -0.8s;
}

@keyframes spinner_fUkk {
  8.33% {
    x: 13px;
    y: 1px;
  }

  25% {
    x: 13px;
    y: 1px;
  }

  33.3% {
    x: 13px;
    y: 13px;
  }

  50% {
    x: 13px;
    y: 13px;
  }

  58.33% {
    x: 1px;
    y: 13px;
  }

  75% {
    x: 1px;
    y: 13px;
  }

  83.33% {
    x: 1px;
    y: 1px;
  }
}
</style>
