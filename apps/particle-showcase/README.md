# Particle showcase

Check out the latest [live demo](https://tfg-particle-showcase.vercel.app/)

## What's inside?

This app has been bootstrapped with [Vite](https://vitejs.dev/). It includes a [three](https://threejs.org/) scene with a parameterized shader.

### Development

To run this app locally, run the following command:

```
cd tfg
yarn
npx turbo run dev --filter particle-showcase 
```

### Modeling

In the [Modeling directory](./modeling/) you will find [Blender](https://www.blender.org/) files that you can edit and be reflected on the app.

There are two scripts that can be used to make your job easier when modelling. 

> Make sure you run them in the app directory!

- `yarn model`: Updates the public model directory of newly made glb imports from the modeling blender files.

- `yarn watch`: Executes `yarn model` when a file in the ./modeling directory changes
