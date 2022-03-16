<template>
  <div class="flex-1 px-4 flex justify-between">
    <div class="flex-1 flex">
      <form class="w-full flex md:ml-0" action="#" method="GET">
        <label for="search-field" class="sr-only">Search</label>
        <div class="relative w-full text-gray-400 focus-within:text-gray-600">
          <div
            class="
              absolute
              inset-y-0
              left-0
              flex
              items-center
              pointer-events-none
            "
          >
            <SearchIcon class="h-5 w-5" aria-hidden="true" />
          </div>
          <input
            id="search-field"
            class="
              block
              w-full
              h-full
              pl-8
              pr-3
              py-2
              border-transparent
              text-gray-900
              placeholder-gray-500
              focus:outline-none
              focus:placeholder-gray-400
              focus:ring-0
              focus:border-transparent
              sm:text-sm
            "
            placeholder="Search"
            type="search"
            name="search"
          />
        </div>
      </form>
    </div>
    <div class="ml-4 flex items-center md:ml-6">
      <span class="relative">
        <button
          type="button"
          class="
            bg-white
            p-1
            rounded-full
            text-gray-400
            hover:text-gray-500
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-yellow-500
          "
        >
          <span class="sr-only">View notifications</span>
          <BellIcon class="h-6 w-6" aria-hidden="true" />
          <span class="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
            <span
              class="
                animate-ping
                absolute
                inline-flex
                h-full
                w-full
                rounded-full
                bg-purple-400
                opacity-75
              "
            ></span>
            <span
              class="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"
            ></span>
          </span>
        </button>
      </span>

      <!-- Profile dropdown -->
      <Menu as="div" class="ml-3 relative">
        <div>
          <MenuButton
            class="
              max-w-xs
              bg-white
              flex
              items-center
              text-sm
              rounded-full
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-yellow-500
            "
          >
            <span class="sr-only">Open user menu</span>
            <img
              class="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </MenuButton>
        </div>
        <transition
          enter-active-class="transition ease-out duration-100"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <MenuItems
            class="
              origin-top-right
              absolute
              right-0
              mt-2
              w-48
              rounded-md
              shadow-lg
              py-1
              bg-white
              ring-1 ring-black ring-opacity-5
              focus:outline-none
            "
          >
            <MenuItem
              v-for="item in userNavigation"
              :key="item.name"
              v-slot="{ active }"
            >
              <router-link
                :to="item.to"
                :class="[
                  active ? 'bg-gray-100' : '',
                  'block px-4 py-2 text-sm text-gray-700',
                ]"
                >{{ item.name }}</router-link
              >
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="[
                  active ? 'bg-gray-100' : '',
                  'block px-4 py-2 text-sm text-gray-700',
                ]"
                @click.prevent="logout"
              >
                Sign Out
              </a>
            </MenuItem>
          </MenuItems>
        </transition>
      </Menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { useStore } from 'vuex';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { BellIcon } from '@heroicons/vue/outline';
import { SearchIcon } from '@heroicons/vue/solid';
import AuthService from '../../services/AuthService';

const $store = useStore();

const _authService: AuthService = inject('authService') as AuthService;

const userNavigation = [
  //{ name: 'Your Profile', to: '/profile' },
  { name: 'Settings', to: '/settings' },
];

function logout() {
  _authService.signout();
}
</script>

<style></style>
