<template>
  <div>
    <MobileMenu
      :navigation="navigation"
      :sidebarOpen="sidebarOpen"
      @sidebarClosed="sidebarOpen = false"
    />
    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <AppNavigation :navigation="navigation" />
    </div>
    <div class="md:pl-64 flex flex-col flex-1">
      <div class="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
        <button
          type="button"
          class="
            px-4
            border-r border-gray-200
            text-gray-500
            focus:outline-none
            focus:ring-2
            focus:ring-inset
            focus:ring-yellow-500
            md:hidden
          "
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <MenuAlt2Icon class="h-6 w-6" aria-hidden="true" />
        </button>
        <TopMenu />
      </div>

      <main class="flex-1">
        <div class="py-6">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div class="flex flex-col">
              <router-view v-slot="{ Component }">
                <transition name="route" mode="out-in">
                  <component :is="Component" />
                </transition>
              </router-view>
            </div>
          </div>
        </div>
      </main>
    </div>
    <AuthTimeoutModal :open="sessionExpired" />
  </div>
</template>

<script setup lang="ts">
import { ref, inject, onMounted, onBeforeUnmount, RenderFunction } from 'vue';

import { MenuAlt2Icon, ClipboardIcon, HomeIcon } from '@heroicons/vue/outline';

import AppNavigation from '@/components/common/AppNavigation.vue';
import MobileMenu from '@/components/common/MobileMenu.vue';
import AuthService from '../../services/AuthService';
import AuthTimeoutModal from '@/components/auth/AuthTimeoutModal.vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { IAuthRefreshCredentials } from '../../types/Auth';
import { throttle, parseJwt } from '../../utils';
import { NavigationItem } from '../../types/UI';
import TopMenu from '../../components/common/TopMenu.vue';

const $router = useRouter();
const $store = useStore();

const _authService: AuthService = inject('authService') as AuthService;

const navigation: NavigationItem[] = [
  { name: 'Dashboard', icon: HomeIcon, to: '/dashboard' },
  {
    name: 'Jobs',
    icon: ClipboardIcon,
    children: [
      { name: 'List', to: '/jobs' },
      { name: 'Create', to: '/jobs/create' },
    ],
  },
];

const sidebarOpen = ref(false);
const sessionExpired = ref(false);

const tHandler = throttle(60 * 1000, reAuth);
const focusListener = (_e: Event) => {
  if (document.visibilityState === 'visible' && !sessionExpired.value) {
    checkAuth();
  }
};

function checkAuth() {
  const now = new Date();
  const accessExpires = new Date($store.state.accessExpires);

  if (now.getTime() > accessExpires.getTime()) {
    document.removeEventListener('click', tHandler);
    document.removeEventListener('visibilitychange', focusListener);
    sessionExpired.value = true;
    setInterval(() => {
      _authService.signout();
    }, 10 * 1000);
  }
}

function reAuth() {
  const accessToken: string = localStorage.getItem('accessToken') as string;
  const refreshToken: string = localStorage.getItem('refreshToken') as string;

  const decodedToken = parseJwt(accessToken);

  if (!decodedToken) return;

  const credentials: IAuthRefreshCredentials = {
    email: decodedToken?.email,
    refreshToken: refreshToken,
  };
  _authService.refresh(credentials);
}

onMounted(() => {
  document.addEventListener('click', tHandler);
  document.addEventListener('visibilitychange', focusListener);
  setInterval(checkAuth, 60 * 1000);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', tHandler);
  document.removeEventListener('visibilitychange', focusListener);
});
</script>

<style>
.route-enter-from {
  opacity: 0;
  /*transform: translateY(-30px);*/
}

.route-leave-to {
  opacity: 0;
  /*transform: translateY(30px);*/
}

.route-enter-active {
  transition: all 0.2s ease-out;
}

.route-leave-active {
  transition: all 0.2s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  /* transform: translateY(0); */
}
</style>
