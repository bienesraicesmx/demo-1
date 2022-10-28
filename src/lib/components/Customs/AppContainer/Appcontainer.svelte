<script>
    import { ResponsiveDrawer , NavBarApp , FilterBar , Footer } from '$lib/components';
    
    export let docs;

    let cityArr = new Set();
    let priceArr = new Set();
    
    docs?.map((item,i) => {
        cityArr.add(item.city);
        priceArr.add(item.price);
    });
    
    const formatCityNames = () => {
        let names = [...cityArr].map(name => ({value:name,tag:name}));
        return names;
    }
    
    const formatRanges = () => {
        let ranges = [...priceArr].sort();
        let steps = ranges.map((pr,i,arr) => arr[i+1] - pr);
        steps.pop();
        return {
            step:steps.sort((a, b) => a - b )[0],
            rmin:ranges[0],
            rmax:ranges[ranges.length -1]
        }   
    }

    $: cities = formatCityNames();
    $: prices = formatRanges();
</script>



<div class="content">
    <ResponsiveDrawer>
        <FilterBar slot="menu" {cities} {...prices} />
        <div slot="content" class="h-full">
            <slot/>
        </div>
    </ResponsiveDrawer>
</div>
