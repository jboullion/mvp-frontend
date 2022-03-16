<template>
  <Popover>
    <nav
      class="
        relative
        max-w-7xl
        mx-auto
        flex
        items-center
        justify-between
        px-4
        sm:px-6
      "
      aria-label="Global"
    >
      <div class="flex items-center flex-1">
        <div class="flex items-center justify-between w-full md:w-auto">
          <router-link to="/">
            <!-- <span class="sr-only">DIY Checklist</span> -->
            <img
              class="h-8 w-auto sm:h-10"
              src="@/assets/logo.svg"
              alt="DIY Checklist"
            />
          </router-link>
          <div class="text-lg font-medium ml-2">DIY Checklist</div>
          <div class="-mr-2 flex items-center md:hidden">
            <PopoverButton
              class="
                bg-white
                rounded-md
                p-2
                inline-flex
                items-center
                justify-center
                text-gray-400
                hover:text-gray-500 hover:bg-gray-100
                focus:outline-none
                focus:ring-2
                focus:ring-inset
                focus:ring-yellow-500
              "
            >
              <span class="sr-only">Open main menu</span>
              <MenuIcon class="h-6 w-6" aria-hidden="true" />
            </PopoverButton>
          </div>
        </div>
        <div class="hidden md:block md:ml-10 md:space-x-10">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            class="font-medium text-gray-500 hover:text-gray-900"
            >{{ item.name }}</a
          >
        </div>
      </div>
      <div class="hidden md:block text-right">
        <span
          class="
            inline-flex
            rounded-md
            shadow-md
            ring-1 ring-black ring-opacity-5
          "
        >
          <router-link
            to="/login"
            class="
              inline-flex
              items-center
              px-4
              py-2
              border border-transparent
              text-base
              font-medium
              rounded-md
              bg-yellow-500
              text-white
              hover:bg-yellow-400
            "
          >
            Log in
          </router-link>
        </span>
      </div>
    </nav>

    <transition
      enter-active-class="duration-150 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="
          absolute
          z-10
          top-0
          inset-x-0
          p-2
          transition
          transform
          origin-top-right
          md:hidden
        "
      >
        <div
          class="
            rounded-lg
            shadow-md
            bg-white
            ring-1 ring-black ring-opacity-5
            overflow-hidden
          "
        >
          <div class="px-5 pt-4 flex items-center justify-between">
            <div>
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-yellow-600.svg"
                alt=""
              />
            </div>
            <div class="-mr-2">
              <PopoverButton
                class="
                  bg-white
                  rounded-md
                  p-2
                  inline-flex
                  items-center
                  justify-center
                  text-gray-400
                  hover:text-gray-500 hover:bg-gray-100
                  focus:outline-none
                  focus:ring-2
                  focus:ring-inset
                  focus:ring-yellow-500
                "
              >
                <span class="sr-only">Close main menu</span>
                <XIcon class="h-6 w-6" aria-hidden="true" />
              </PopoverButton>
            </div>
          </div>
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              class="
                block
                px-3
                py-2
                rounded-md
                text-base
                font-medium
                text-gray-700
                hover:text-gray-900 hover:bg-gray-50
              "
              >{{ item.name }}</a
            >
          </div>
          <router-link
            to="/login"
            class="
              block
              w-full
              px-5
              py-3
              text-center
              font-medium
              text-yellow-600
              bg-gray-50
              hover:bg-gray-100
            "
          >
            Log in
          </router-link>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import { MenuIcon, XIcon } from '@heroicons/vue/outline';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];
</script>

<style></style>
