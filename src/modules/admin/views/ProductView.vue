<template>
  <div class="bg-white px-5 py-2 rounded">
    <h1 class="text-3xl">
      Producto: <small class="text-blue-500">{{ title }}</small>
    </h1>
    <hr class="my-4" />
  </div>

  <form @submit="onSubmit" class="grid grid-cols-1 sm:grid-cols-2 bg-white px-5 gap-5">
    <div class="first-col">
      <!-- Primera parte del formulario -->
      <div class="mb-4">
        <label for="title" block text-gray-700 text-sm font-bold mb-2> Título </label>
        <CustomInput v-model="title" v-bind="titleAttrs" :error="errors.title" />
      </div>

      <div class="mb-4">
        <label for="slug" class="form-label">Slug</label>
        <CustomInput v-model="slug" v-bind="slugAttrs" :error="errors.slug" />
      </div>

      <div class="mb-4">
        <label for="description" class="form-label">Descripción</label>
        <CustomTextArea v-model="description" v-bind="descriptionAttrs" :error="errors.description">
        </CustomTextArea>
      </div>

      <div class="flex flex-row gap-3">
        <div class="mb-4">
          <label for="price" class="form-label">Precio</label>
          <CustomInput v-model.number="price" v-bind="priceAttrs" :error="errors.price" />
        </div>

        <div class="mb-4">
          <label for="stock" class="form-label">Inventario</label>
          <CustomInput v-model.number="stock" v-bind="stockAttrs" :error="errors.stock" />
        </div>
      </div>

      <div>
        <label for="sizes" class="form-label">Tallas</label>
        <button
          v-for="size of allSizes"
          key="size"
          @click="toggleSizes(size)"
          type="button"
          :class="[
            'p-2 rounded w-14 mr-2 flex-1',
            {
              'bg-blue-500 text-white': hasSize(size),
              'bg-blue-100': !hasSize(size),
            },
          ]"
        >
          {{ size }}
        </button>
      </div>
    </div>

    <!-- Segunda columna -->
    <div class="first-col">
      <label for="stock" class="form-label">Imágenes</label>
      <!-- Row with scrollable horizontal -->
      <div class="flex p-2 overflow-x-auto space-x-8 w-full h-[265px] bg-gray-200 rounded">
        <div v-for="image of images" :key="image.value" class="flex-shrink-0">
          <img :src="image.value" alt="title" class="w-[250px] h-[250px] rounded" />
        </div>
      </div>
      <!-- Upload image -->
      <div class="col-span-2 my-2">
        <label for="image" class="form-label">Subir imagen</label>

        <input multiple type="file" id="image" class="form-micontrol" />
      </div>

      <div class="mb-4">
        <label for="stock" class="form-label">Género</label>
        <select v-model="gender" v-bind="genderAttrs" class="form-control">
          <option value="">Seleccione</option>
          <option value="kid">Niño</option>
          <option value="women">Mujer</option>
          <option value="men">Hombre</option>
          <option value="unisex">Unisex</option>
        </select>
        <span class="text-red-400" v-show="errors.gender">{{ errors.gender }}</span>
      </div>

      <!-- Botón para guardar -->
      <div class="my-4 text-right">
        <button
          :disabled="isPending"
          type="submit"
          class="disable:bg-gray-100 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Guardar
        </button>
      </div>
    </div>
  </form>

  <div class="grid grid-cols-2 mt-2">
    <pre class="bg-blue-200 p-2">
            {{ JSON.stringify(values, null, 2) }}
        </pre
    >
    <pre class="bg-red-200 p-2">
            {{ JSON.stringify(errors, null, 2) }}
        </pre
    >
    <pre class="bg-green-200 p-2 col-span-2">
            {{ JSON.stringify(meta, null, 2) }}
        </pre
    >
  </div>
</template>

<script src="./ProductView.ts" lang="ts"></script>

<style scoped>
@reference "@/style.css";

.form-label {
  @apply block text-gray-700 text-sm font-bold mb-2;
}

.form-control {
  @apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none;
}

.form-micontrol {
  @apply block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 file:bg-gray-50 file:border-0 file:me-4 file:py-3 file:px-4;
}
</style>
