<template>
    <header :class="[
        'fixed w-full z-50 transition-all duration-300 ease-in-out',
        isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/80 py-3' // Header khi cuộn / trên trang con
            : 'bg-gradient-to-b from-black/40 to-transparent py-5' // Header trên Hero Section (trang chủ)
    ]">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav class="flex items-center justify-between h-16">
                <!-- Logo -->
                <a href="#hero" class="flex items-center space-x-2">
                    <!-- Thay thế bằng SVG hoặc file ảnh logo của bạn -->
                    <svg :class="['h-8 w-auto transition-colors duration-300', isScrolled ? 'text-amber-600' : 'text-white']"
                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span :class="[
                        'font-bold text-2xl tracking-tight transition-colors duration-300',
                        isScrolled ? 'text-gray-800' : 'text-white'
                    ]" :style="{ fontFamily: !isScrolled ? '\'Playfair Display\', serif' : '\'Lato\', sans-serif' }">
                        AesthetiPrime
                    </span>
                </a>

                <!-- Desktop Navigation -->
                <div class="hidden lg:flex lg:items-center lg:space-x-5">
                    <a v-for="link in navLinks" :key="link.name" @click="goTo(link.href)" :class="[
                        'text-sm font-medium transition-colors duration-300 hover:text-amber-400 cursor-pointer',
                        isScrolled ? 'text-gray-700 hover:text-amber-500' : 'text-white/90 hover:text-white',
                    ]" style="font-family: 'Lato', sans-serif;">
                        {{ link.name }}
                    </a>
                </div>

                <!-- Desktop CTA and Language Switcher -->
                <div class="hidden lg:flex items-center space-x-4">
                    <button v-if="!isScrolled"
                        class="px-5 py-2 text-[15px] font-semibold rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-300 focus:ring-offset-black/50"
                        style="background-color: #FFF4BD; color: #3A3A3A; font-family: 'Lato', sans-serif;"
                        @mouseover="($event.target as HTMLButtonElement).style.backgroundColor = '#FFE169'; ($event.target as HTMLButtonElement).style.boxShadow = '0 2px 10px rgba(255, 225, 105, 0.3)';"
                        @mouseout="($event.target as HTMLButtonElement).style.backgroundColor = '#FFF4BD'; ($event.target as HTMLButtonElement).style.boxShadow = 'none';">
                        Book a Consultation
                    </button>
                    <button v-if="isScrolled"
                        class="px-5 py-2 text-[15px] font-semibold rounded-full text-white transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-600 shadow-md hover:shadow-lg"
                        style="background-color: #D4AF37; font-family: 'Lato', sans-serif;"
                        @mouseover="($event.target as HTMLButtonElement).style.backgroundColor = '#C09E2E';"
                        @mouseout="($event.target as HTMLButtonElement).style.backgroundColor = '#D4AF37';">
                        Book a Consultation
                    </button>

                    <div :class="['text-sm font-medium transition-colors duration-300', isScrolled ? 'text-gray-700' : 'text-white/90']"
                        style="font-family: 'Lato', sans-serif;">
                        <a href="#" :class="[isScrolled ? 'hover:text-amber-600' : 'hover:text-white']">EN</a>
                        <span :class="[isScrolled ? 'text-gray-400' : 'text-white/50']"> | </span>
                        <a href="#" :class="[isScrolled ? 'hover:text-amber-600' : 'hover:text-white']">VI</a>
                    </div>
                </div>

                <!-- Mobile Menu Button -->
                <div class="lg:hidden">
                    <button @click="toggleMobileMenu"
                        :class="['p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset', isScrolled ? 'text-gray-600 hover:text-gray-900 focus:ring-amber-500' : 'text-white/90 hover:text-white focus:ring-white']"
                        aria-label="Open main menu">
                        <span class="sr-only">Open main menu</span>
                        <svg v-if="!isMobileMenuOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </nav>
        </div>

        <!-- Mobile Menu (Dropdown) -->
        <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
            <div v-if="isMobileMenuOpen"
                class="lg:hidden absolute w-full bg-white shadow-xl rounded-b-lg mt-0 border-t border-gray-200/80">
                <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a v-for="link in navLinks" :key="link.name" :href="link.href" @click="isMobileMenuOpen = false"
                        class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                        style="font-family: 'Lato', sans-serif;">
                        {{ link.name }}
                    </a>
                </div>
                <div class="pt-4 pb-4 border-t border-gray-200">
                    <div class="px-5 mb-3">
                        <button
                            class="w-full bg-amber-500 text-white px-6 py-2.5 text-sm font-semibold rounded-full hover:bg-amber-600 transition-all duration-300 ease-in-out transform hover:scale-105"
                            style="font-family: 'Lato', sans-serif;">
                            Book a Consultation
                        </button>
                    </div>
                    <div class="text-center text-sm font-medium text-gray-600" style="font-family: 'Lato', sans-serif;">
                        <a href="#" class="hover:text-amber-500">EN</a>
                        <span class="text-gray-400"> | </span>
                        <a href="#" class="hover:text-amber-500">VI</a>
                    </div>
                </div>
            </div>
        </transition>
    </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

// Ngưỡng cuộn để thay đổi style header (ví dụ: 50px)
const SCROLL_THRESHOLD = 50;

const goTo = (name: string) => {
    router.push({ name })
}

const handleScroll = () => {
    if (window.scrollY > SCROLL_THRESHOLD) {
        isScrolled.value = true;
    } else {
        isScrolled.value = false;
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Kiểm tra trạng thái ban đầu khi tải trang
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

const navLinks = [
    { name: 'Home', href: 'Home' },
    { name: 'About', href: 'AboutUs' },
    { name: 'Our Services', href: '#services' },
    { name: 'Doctors', href: 'Doctor' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: 'Contact' },
];

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<style scoped lang="scss"></style>