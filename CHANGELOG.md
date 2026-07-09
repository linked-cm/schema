# @\_linked/schema

## 1.0.8

### Patch Changes

- [#8](https://github.com/linked-cm/schema/pull/8) [`76c335f`](https://github.com/linked-cm/schema/commit/76c335fd7e8d2464c1816d70197fa96bb9c175f6) Thanks [@flyon](https://github.com/flyon)! - `Thing.image` is now an **owned** (`contains: true`) object property: an entity exclusively owns its `ImageObject`. Combined with core 2.14.1's owned-property cleanup, replacing/removing an entity's image (`update({image: {contentUrl}})`) now cascade-deletes the previous `ImageObject` instead of leaving it orphaned in the graph.

## 1.0.7

### Patch Changes

- [#5](https://github.com/linked-cm/schema/pull/5) [`a8d45e4`](https://github.com/linked-cm/schema/commit/a8d45e4ec930b72aee0921c08924ccb2705c8040) Thanks [@flyon](https://github.com/flyon)! - loadData: ESM-only JSON import — drop the dead CJS branch, add the `{ with: { type: 'json' } }` import attribute.

## 1.0.6

### Patch Changes

- [#2](https://github.com/linked-cm/schema/pull/2) [`c9860d8`](https://github.com/linked-cm/schema/commit/c9860d8e7314e326cf1089227097078b142a824e) Thanks [@flyon](https://github.com/flyon)! - Switch to explicit per-step build pipeline so silent build failures no longer ship empty tarballs. The previous `yarn linked build` wrapper was failing silently in CI and dropping all compiled `.js` files from the published tarball.

## 1.0.5

### Patch Changes

- [`ce693b4`](https://github.com/linked-cm/schema/commit/ce693b4e0be4986a2e152efcc032949852eaf0be) - Initial release under the new publishing setup.
