<template>
    <main class="pt-20">
        <!-- Added: Contact Hero Section -->
        <section class="bg-[#FFF4BD] py-20">
            <div class="container mx-auto px-4 text-center" data-aos="fade-up">
                <h1 class="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">We're here to help and answer any questions you might
                    have. We look forward to hearing from you.</p>
            </div>
        </section>

        <!-- Added: Contact Information and Form Section -->
        <section class="py-20">
            <div class="container mx-auto px-4">
                <div class="grid md:grid-cols-2 gap-12">
                    <!-- Contact Information -->
                    <div data-aos="fade-right">
                        <h2 class="text-3xl font-bold mb-8">Contact Information</h2>
                        <div class="space-y-6">
                            <div class="flex items-start gap-4">
                                <svg class="w-6 h-6 text-[#FFE169] mt-1" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <div>
                                    <h3 class="font-semibold mb-2">Address</h3>
                                    <p class="text-gray-600">123 Medical Center Drive<br />Ho Chi Minh City, Vietnam</p>
                                </div>
                            </div>

                            <div class="flex items-start gap-4">
                                <svg class="w-6 h-6 text-[#FFE169] mt-1" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <div>
                                    <h3 class="font-semibold mb-2">Email</h3>
                                    <p class="text-gray-600">contact@medibeauty.com</p>
                                </div>
                            </div>

                            <div class="flex items-start gap-4">
                                <svg class="w-6 h-6 text-[#FFE169] mt-1" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <div>
                                    <h3 class="font-semibold mb-2">Phone</h3>
                                    <p class="text-gray-600">+84 (555) 123-4567</p>
                                </div>
                            </div>

                            <div class="flex items-start gap-4">
                                <svg class="w-6 h-6 text-[#FFE169] mt-1" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div>
                                    <h3 class="font-semibold mb-2">Working Hours</h3>
                                    <p class="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 9:00 AM -
                                        2:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Contact Form -->
                    <div data-aos="fade-left">
                        <form class="space-y-6">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                <input type="text"
                                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFE169] focus:border-transparent transition-all"
                                    placeholder="Enter your name">
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input type="email"
                                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFE169] focus:border-transparent transition-all"
                                    placeholder="Enter your email">
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                <input type="text"
                                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFE169] focus:border-transparent transition-all"
                                    placeholder="Enter subject">
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea rows="4"
                                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFE169] focus:border-transparent transition-all"
                                    placeholder="Enter your message"></textarea>
                            </div>

                            <button type="submit"
                                class="w-full bg-[#FFE169] text-gray-900 font-semibold py-3 rounded-lg hover:bg-[#FFF4BD] transition-all transform hover:scale-[1.02]">Send
                                Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <!-- Added: Map Section -->
        <section class="py-20 bg-gray-50">
            <div class="container mx-auto px-4">
                <div data-aos="zoom-in" class="rounded-xl overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4241674197667!2d106.69786057580705!3d10.77646635927758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3a9d8d1bb3%3A0xc4b3b51844078423!2sHo%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1709140847761!5m2!1sen!2s"
                        width="100%" height="450" style="border:0;" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss"></style>