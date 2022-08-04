# FH-product-card

Este es un paquete de pruebas de despliegue de npm

```
import {ProductCard,ProductImage, ProductTittle,ProductButtons} from 'fh-product-card'
```

````
<ProductCard
				product={product}
				initialValues={{
					count: 4,
					maxCount: 10,
				}}
			>
				{({ reset, increaseBy, isMaxCountReached }) => (
					<>
						<ProductImage />
						<ProductTittle />
						<ProductButtons />
					</>
				)}
			</ProductCard>
      ```
````
