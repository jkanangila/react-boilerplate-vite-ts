#!/bin/bash

mkdir -p src

mkdir -p src/di
touch src/di/index.ts

mkdir -p src/data
mkdir -p src/data/remote
touch src/data/remote/index.ts
mkdir -p src/data/repo
touch src/data/repo/index.ts

mkdir -p src/domain
mkdir -p src/domain/enum
touch src/domain/enum/index.ts
mkdir -p src/domain/models
touch src/domain/models/index.ts
mkdir -p src/domain/repo
touch src/domain/repo/index.ts
mkdir -p src/domain/useCase
touch src/domain/useCase/index.ts

mkdir -p src/presentation
mkdir -p src/presentation/core
mkdir -p src/presentation/core/components
touch src/presentation/core/components/index.ts
mkdir -p src/presentation/core/components/atoms
touch src/presentation/core/components/atoms/index.ts
mkdir -p src/presentation/core/components/molecules
touch src/presentation/core/components/molecules/index.ts
mkdir -p src/presentation/core/components/organisms
touch src/presentation/core/components/organisms/index.ts
mkdir -p src/presentation/core/layout
touch src/presentation/core/layout/index.ts
mkdir -p src/presentation/core/utils
touch src/presentation/core/utils/index.ts
mkdir -p src/presentation/theme
touch src/presentation/theme/index.ts
mkdir -p src/presentation/pages
touch src/presentation/pages/index.ts
mkdir -p src/presentation/routes
touch src/presentation/routes/index.ts