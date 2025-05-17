<template>
    <main>
        <!-- Hero Section -->
        <section id="hero" class="relative min-h-screen flex items-center justify-center text-center bg-gray-800">
            <!-- Background Image -->
            <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                alt="Luxury Medical Clinic Interior" class="absolute inset-0 w-full h-full object-cover" />
            <!-- Overlay for better text contrast on hero image -->
            <div class="absolute inset-0 bg-black/50"></div>

            <div class="relative z-10 p-6 mt-16 sm:mt-0"> {/* mt-16 để tránh header che mất content trên mobile */}
                <h1 class="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                    style="font-family: 'Playfair Display', serif;">
                    Elevate Your Beauty
                </h1>
                <p class="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto"
                    style="font-family: 'Lato', sans-serif;">
                    Experience world-class cosmetic surgery in a luxurious and caring environment. Your journey to
                    confidence starts here.
                </p>
                <div class="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
                    <button
                        class="w-full sm:w-auto px-8 py-3 sm:px-10 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 focus:ring-offset-black/50"
                        style="background-color: #FFF4BD; color: #3A3A3A; font-family: 'Lato', sans-serif;">
                        Free Consultation
                    </button>
                    <a href="#services"
                        class="w-full sm:w-auto px-8 py-3 sm:px-10 sm:py-4 text-base sm:text-lg font-semibold text-white rounded-full border-2 border-white/80 hover:bg-white/10 hover:border-white transition-all duration-300 ease-in-out"
                        style="font-family: 'Lato', sans-serif;">
                        Explore Services
                    </a>
                </div>
            </div>
        </section>

        <!-- Placeholder sections -->
        <section id="about" class="py-16 md:py-24 bg-white">
            <div class="container mx-auto px-4 text-center">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
                    style="font-family: 'Playfair Display', serif;">About Us</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">Detailed content about the clinic, philosophy, and
                    commitment to patient care.</p>
            </div>
        </section>
        <section id="services" class="py-16 md:py-24 bg-amber-50/30">
            <div class="container mx-auto px-4 text-center">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
                    style="font-family: 'Playfair Display', serif;">Our Services</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">Overview of services offered, with links to detailed
                    pages.</p>
            </div>
        </section>
        <section id="doctors" class="py-16 md:py-24 bg-white">
            <div class="container mx-auto px-4 text-center">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
                    style="font-family: 'Playfair Display', serif;">Meet Our Specialists</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">Profiles of the surgeons and medical team.</p>
            </div>
        </section>
        <section id="gallery" class="py-16 md:py-24 bg-gray-50">
            <div class="container mx-auto px-4 text-center">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
                    style="font-family: 'Playfair Display', serif;">Before & After Gallery</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">Showcase of results (with appropriate consent and
                    disclaimers).</p>
            </div>
        </section>
        <section id="faqs" class="py-16 md:py-24 bg-white">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center"
                    style="font-family: 'Playfair Display', serif;">Frequently Asked Questions</h2>
                <div class="max-w-3xl mx-auto space-y-6">
                    <!-- Example FAQ item -->
                    <div>
                        <h3 class="text-xl font-semibold text-gray-700" style="font-family: 'Lato', sans-serif;">What is
                            the recovery time?</h3>
                        <p class="mt-2 text-gray-600">Recovery times vary depending on the procedure. We will provide
                            detailed information during your consultation.</p>
                    </div>
                    <div>
                        <h3 class="text-xl font-semibold text-gray-700" style="font-family: 'Lato', sans-serif;">Are
                            consultations free?</h3>
                        <p class="mt-2 text-gray-600">Yes, we offer complimentary initial consultations to discuss your
                            goals and options.</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="contact" class="py-16 md:py-24 bg-amber-500/10">
            <div class="container mx-auto px-4 text-center">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
                    style="font-family: 'Playfair Display', serif;">Get In Touch</h2>
                <p class="text-lg text-gray-600 max-w-xl mx-auto mb-8">Ready to start your transformation? Contact us
                    today to schedule your confidential consultation.</p>
                <button
                    class="px-8 py-3 sm:px-10 sm:py-4 text-base sm:text-lg font-semibold rounded-full text-white transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-600 shadow-md hover:shadow-lg"
                    style="background-color: #D4AF37; font-family: 'Lato', sans-serif;">
                    Book a Consultation Now
                </button>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>