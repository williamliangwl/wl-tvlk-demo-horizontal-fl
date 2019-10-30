# wl-tvlk-demo-horizontal-fl

This repository is inteded to be a demo React Native project to handle the behavior of horizontal `FlatList`.

The behavior we are trying to solve is: `FlatList` will render all children with the same height: using the tallest height among all of them.

The reason of needing this workaround:
- We have a tab content that has many content, leading to very tall tab. While another tab doesn't have that much content, hence user will see quite weird layout when they switch tab to the smaller tab.

# Note
- Beware of using this workaround: `This is not a solution to all cases!`
- This workaround won't work when we have the following tab contents:
  - Tab A has a very long content
  - Tab B has little content, but its content is expand-collapsible

