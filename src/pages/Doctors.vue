<template>
    <main class="pt-20">
        <!-- Added: Doctors Hero Section -->
        <section class="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
            <div class="container mx-auto px-4 text-center" data-aos="fade-up">
                <h1 class="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Meet Our Expert Doctors</h1>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">Our team of experienced medical professionals is
                    dedicated to providing you with the highest quality healthcare services.</p>
            </div>
        </section>

        <!-- Added: Doctors Grid Section -->
        <section class="py-20">
            <div class="container mx-auto px-4">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Doctor Card 1 -->
                    <div class="group" data-aos="fade-up" data-aos-delay="100">
                        <div
                            class="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                            <div class="relative w-48 h-48 mx-auto mb-6">
                                <div class="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full">
                                </div>
                                <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d" alt="Doctor"
                                    class="absolute inset-4 w-40 h-40 object-cover rounded-full">
                            </div>
                            <h3 class="text-xl font-bold text-center mb-2">Dr. Sarah Johnson</h3>
                            <p class="text-blue-600 text-center mb-2">Ph.D., Senior Specialist</p>
                            <p class="text-gray-600 text-center mb-4">Dermatology</p>
                            <button
                                class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">View
                                Profile</button>
                        </div>
                    </div>

                    <!-- Doctor Card 2 -->
                    <div class="group" data-aos="fade-up" data-aos-delay="200">
                        <div
                            class="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                            <div class="relative w-48 h-48 mx-auto mb-6">
                                <div class="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full">
                                </div>
                                <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d" alt="Doctor"
                                    class="absolute inset-4 w-40 h-40 object-cover rounded-full">
                            </div>
                            <h3 class="text-xl font-bold text-center mb-2">Dr. Michael Chen</h3>
                            <p class="text-blue-600 text-center mb-2">M.D., Chief Surgeon</p>
                            <p class="text-gray-600 text-center mb-4">Cardiology</p>
                            <button
                                class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">View
                                Profile</button>
                        </div>
                    </div>

                    <!-- Doctor Card 3 -->
                    <div class="group" data-aos="fade-up" data-aos-delay="300">
                        <div
                            class="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                            <div class="relative w-48 h-48 mx-auto mb-6">
                                <div class="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full">
                                </div>
                                <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f" alt="Doctor"
                                    class="absolute inset-4 w-40 h-40 object-cover rounded-full">
                            </div>
                            <h3 class="text-xl font-bold text-center mb-2">Dr. Emily Wilson</h3>
                            <p class="text-blue-600 text-center mb-2">Ph.D., Senior Consultant</p>
                            <p class="text-gray-600 text-center mb-4">Neurology</p>
                            <button
                                class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">View
                                Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss"></style>