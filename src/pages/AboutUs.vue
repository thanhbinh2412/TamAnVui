<template>
    <main>
        <!-- Added: New About Us Hero Section -->
        <section class="min-h-[70vh] relative flex items-center pt-20">
            <div class="absolute inset-0 z-0">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c" alt="Modern Office"
                    class="w-full h-full object-cover opacity-30">
            </div>

            <div class="container mx-auto px-4 z-10">
                <div class="max-w-3xl">
                    <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">About MediBeauty</h1>
                    <p class="text-xl text-gray-600 mb-8">Transforming lives through excellence in cosmetic surgery,
                        combining artistry with medical expertise to help you achieve your aesthetic goals.</p>
                </div>
            </div>
        </section>

        <!-- Added: Company History Section -->
        <section class="py-20 bg-white">
            <div class="container mx-auto px-4">
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 class="text-3xl font-bold mb-6">Our Journey</h2>
                        <p class="text-gray-600 mb-4">Founded in 2010, MediBeauty has grown from a small clinic to one
                            of the most trusted names in cosmetic surgery. Our commitment to excellence and patient care
                            has remained unwavering throughout our journey.</p>
                        <p class="text-gray-600 mb-4">We believe in combining cutting-edge technology with personalized
                            care to deliver results that exceed expectations.</p>
                    </div>
                    <div class="rounded-xl overflow-hidden shadow-lg">
                        <img src="https://images.unsplash.com/photo-1504672281656-e4981d70414b" alt="Our Facility"
                            class="w-full h-[400px] object-cover">
                    </div>
                </div>
            </div>
        </section>

        <!-- Added: Values Section -->
        <section class="py-20 bg-gray-50 transform transition-all duration-500 hover:bg-gray-100">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-bold text-center mb-12 hover:scale-105 transition-transform duration-300">Our
                    Values</h2>
                <div class="grid md:grid-cols-3 gap-8">
                    <div
                        class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                        <h3 class="text-xl font-bold mb-4 hover:text-[#FFE169] transition-colors">Excellence</h3>
                        <p class="text-gray-600 hover:text-gray-900 transition-colors">We strive for excellence in every
                            procedure, consultation, and patient interaction.</p>
                    </div>
                    <div
                        class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                        <h3 class="text-xl font-bold mb-4 hover:text-[#FFE169] transition-colors">Innovation</h3>
                        <p class="text-gray-600 hover:text-gray-900 transition-colors">Embracing the latest technologies
                            and techniques to provide superior results.</p>
                    </div>
                    <div
                        class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                        <h3 class="text-xl font-bold mb-4 hover:text-[#FFE169] transition-colors">Patient Care</h3>
                        <p class="text-gray-600 hover:text-gray-900 transition-colors">Your safety, comfort, and
                            satisfaction are our top priorities.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Updated: Trust Section renamed to Leadership Team -->
        <section class="py-20 bg-white">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-bold text-center mb-16">Our Leadership Team</h2>

                <div class="grid md:grid-cols-3 gap-8">
                    <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                        <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2" alt="Doctor"
                            class="w-full h-64 object-cover">
                        <div class="p-6">
                            <h3 class="text-xl font-bold mb-2">Dr. Sarah Chen</h3>
                            <p class="text-gray-600 mb-4">Facial Reconstruction Specialist</p>
                            <p class="text-sm text-gray-500">15+ years experience in aesthetic surgery</p>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                        <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d" alt="Doctor"
                            class="w-full h-64 object-cover">
                        <div class="p-6">
                            <h3 class="text-xl font-bold mb-2">Dr. Michael Park</h3>
                            <p class="text-gray-600 mb-4">Body Contouring Expert</p>
                            <p class="text-sm text-gray-500">International certification in plastic surgery</p>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                        <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f" alt="Doctor"
                            class="w-full h-64 object-cover">
                        <div class="p-6">
                            <h3 class="text-xl font-bold mb-2">Dr. Anna Smith</h3>
                            <p class="text-gray-600 mb-4">Reconstructive Surgery</p>
                            <p class="text-sm text-gray-500">Pioneer in minimal-invasive techniques</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Updated: Modified CTA Section -->
        <section class="py-20 bg-[#FFF4BD]">
            <div class="container mx-auto px-4 text-center">
                <h2 class="text-3xl font-bold mb-6">Join Our Journey</h2>
                <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Experience the MediBeauty difference. Let us
                    help you achieve the confidence you deserve.</p>
                <button
                    class="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-800 transition">Contact
                    Us Today</button>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss"></style>