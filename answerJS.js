const categories = [
    {
        name: 'category1',
        subcategories: [
            {
                name: 'category2',
                subcategories: []
            },
            {
                name: 'category3',
                subcategories: [
                    {
                        name: 'category4',
                        subcategories: []
                    }
                ]
            }
        ]
    },
    {
        name: 'category5',
        subcategories: []
    }
];

// TO-DO: Implement this function
const getCategoryPath = (categories, categoryName) => {
    let path;

    // 💀💀💀💀💀 :O
    // $('<script src="jquery-1.9.1.min.js"></script>').appendTo(document.body);

    // My answer; a recursive function
    for (let x=0; x<categories.length; x++) {

        if (categories[x].name === categoryName) {
            return '/' + categories[x].name;

        } else if (categories[x].subcategories.length > 0) {
            path = '/' + categories[x].name + getCategoryPath(categories[x].subcategories, categoryName);
        }
    }

    return path;
};

// OUTPUT SAMPLES
console.log(getCategoryPath(categories, 'category4')); // should output: '/category1/category3/category4'
console.log(getCategoryPath(categories, 'category2')); // should output: '/category1/category2'
console.log(getCategoryPath(categories, 'category5')); // should output: '/category5'

