<template>
  <div>
    <div class="mt-10 divide-y divide-gray-200">
      <div class="space-y-1">
        <h3 class="text-lg leading-6 font-medium text-gray-900">Materials</h3>
        <p class="max-w-2xl text-sm text-gray-500">
          This information will be displayed publicly so be careful what you
          share.
        </p>
      </div>
      <div class="mt-6">
        <dl class="divide-y divide-gray-200">
          <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt class="text-sm font-medium text-gray-500">Name</dt>
            <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <span class="flex-grow">Chelsea Hagon</span>
              <span class="ml-4 flex-shrink-0">
                <button
                  type="button"
                  class="
                    bg-white
                    rounded-md
                    font-medium
                    text-yellow-600
                    hover:text-yellow-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-yellow-500
                  "
                >
                  Update
                </button>
              </span>
            </dd>
          </div>
          <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
            <dt class="text-sm font-medium text-gray-500">Photo</dt>
            <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <span class="flex-grow">
                <img
                  class="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </span>
              <span class="ml-4 flex-shrink-0 flex items-start space-x-4">
                <button
                  type="button"
                  class="
                    bg-white
                    rounded-md
                    font-medium
                    text-yellow-600
                    hover:text-yellow-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-yellow-500
                  "
                >
                  Update
                </button>
                <span class="text-gray-300" aria-hidden="true">|</span>
                <button
                  type="button"
                  class="
                    bg-white
                    rounded-md
                    font-medium
                    text-yellow-600
                    hover:text-yellow-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-yellow-500
                  "
                >
                  Remove
                </button>
              </span>
            </dd>
          </div>
          <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
            <dt class="text-sm font-medium text-gray-500">Email</dt>
            <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <span class="flex-grow">chelsea.hagon@example.com</span>
              <span class="ml-4 flex-shrink-0">
                <button
                  type="button"
                  class="
                    bg-white
                    rounded-md
                    font-medium
                    text-yellow-600
                    hover:text-yellow-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-yellow-500
                  "
                >
                  Update
                </button>
              </span>
            </dd>
          </div>
          <div
            class="
              py-4
              sm:py-5
              sm:grid
              sm:grid-cols-3
              sm:gap-4
              sm:border-b
              sm:border-gray-200
            "
          >
            <dt class="text-sm font-medium text-gray-500">Job title</dt>
            <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <span class="flex-grow">Human Resources Manager</span>
              <span class="ml-4 flex-shrink-0">
                <button
                  type="button"
                  class="
                    bg-white
                    rounded-md
                    font-medium
                    text-yellow-600
                    hover:text-yellow-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-yellow-500
                  "
                >
                  Update
                </button>
              </span>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style></style>
