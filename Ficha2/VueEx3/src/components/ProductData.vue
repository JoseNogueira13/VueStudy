<template>
    <div>
        <h2>{{ name }}</h2>
        <img :src="image" alt="Product Image" width="300" height="300">
        <p><a :[attr]="link">More Info</a></p>
        <button :disabled="isDisabled">Add to Cart</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "Desktop Dell i5 3.20GHz 8GB RAM 500GB",
            image: "https://i.ebayimg.com/images/g/7~oAAOSwZQRYeZ6~/s-l300.jpg",
            link: "https://www.ebay.com/itm/Dell-Optiplex-7010-Desktop-PC-Intel-Core-i5-3-20GHz-8GB-RAM-500GB-HDD-Windows-10/254785000073?hash=item3b52b1b9e9:g:7~oAAOSwZQRYeZ6~",
            attr: "href",
            isDisabled: true
        }
    }
}
</script>
