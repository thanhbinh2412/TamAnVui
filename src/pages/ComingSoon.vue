<template>
    <div class="font-[Montserrat] min-h-screen relative overflow-hidden">
        <!-- Added: Full-screen background with overlay -->
        <div class="fixed inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a" alt="Peaceful Lotus"
                class="w-full h-full object-cover animate-breath">
            <div class="absolute inset-0 bg-black/30"></div>
        </div>

        <!-- Added: Main content container with animations -->
        <main class="relative z-10 min-h-screen flex items-center justify-center text-white px-4">
            <div class="text-center animate-fade-in">
                <h1 class="text-4xl md:text-6xl font-light mb-6 tracking-wider">This site is under construction</h1>

                <div class="w-24 h-1 bg-white/50 mx-auto mb-6"></div>

                <p class="text-xl md:text-2xl font-light mb-8 tracking-wide">Inner peace is the root of joy.<br>We will
                    be
                    back soon.</p>

                <!-- Added: Lotus icon using SVG -->
                <div class="flex flex-col space-y-4 items-center">
                    <a href="tel:+84123456789"
                        class="flex items-center space-x-2 hover:text-white/80 transition-colors">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <span>+84 123 456 789</span>
                    </a>
                    <a href="mailto:contact@tamanvui.com"
                        class="flex items-center space-x-2 hover:text-white/80 transition-colors">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <span>contact@tamanvui.com</span>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61575823109652" target="_blank"
                        class="flex items-center space-x-2 hover:text-white/80 transition-colors">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                        <span>Facebook</span>
                    </a>
                    <a href="https://www.youtube.com/@tamanvui-life-coach" target="_blank"
                        class="flex items-center space-x-2 hover:text-white/80 transition-colors">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                        <span>YouTube</span>
                    </a>
                </div>
            </div>
        </main>

        <!-- Added: Footer with language toggle -->
        <footer class="fixed bottom-0 w-full p-6 text-center text-white/80 z-20">
            <button class="text-sm hover:text-white transition-colors duration-300">English | Tiếng Việt</button>
        </footer>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.animate-breath {
    animation: breath 4s infinite ease-in-out;
}

@keyframes breath {

    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.05);
    }
}

.animate-fade-in {
    animation: fadeIn 2s ease-in;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>