
/**
 * Client
**/

import * as runtime from './runtime/binary.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Exercise
 * 
 */
export type Exercise = $Result.DefaultSelection<Prisma.$ExercisePayload>
/**
 * Model Attempt
 * 
 */
export type Attempt = $Result.DefaultSelection<Prisma.$AttemptPayload>
/**
 * Model PersonalBestAggregate
 * 
 */
export type PersonalBestAggregate = $Result.DefaultSelection<Prisma.$PersonalBestAggregatePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TrainingModality: {
  Karate: 'Karate',
  Calisthenics: 'Calisthenics',
  BJJ: 'BJJ',
  Weights: 'Weights',
  Movement: 'Movement',
  Running: 'Running'
};

export type TrainingModality = (typeof TrainingModality)[keyof typeof TrainingModality]


export const MeasurementUnit: {
  minutes: 'minutes',
  reps: 'reps'
};

export type MeasurementUnit = (typeof MeasurementUnit)[keyof typeof MeasurementUnit]

}

export type TrainingModality = $Enums.TrainingModality

export const TrainingModality: typeof $Enums.TrainingModality

export type MeasurementUnit = $Enums.MeasurementUnit

export const MeasurementUnit: typeof $Enums.MeasurementUnit

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Exercises
 * const exercises = await prisma.exercise.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Exercises
   * const exercises = await prisma.exercise.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => $Utils.JsPromise<void> : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.exercise`: Exposes CRUD operations for the **Exercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exercises
    * const exercises = await prisma.exercise.findMany()
    * ```
    */
  get exercise(): Prisma.ExerciseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attempt`: Exposes CRUD operations for the **Attempt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attempts
    * const attempts = await prisma.attempt.findMany()
    * ```
    */
  get attempt(): Prisma.AttemptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.personalBestAggregate`: Exposes CRUD operations for the **PersonalBestAggregate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PersonalBestAggregates
    * const personalBestAggregates = await prisma.personalBestAggregate.findMany()
    * ```
    */
  get personalBestAggregate(): Prisma.PersonalBestAggregateDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Exercise: 'Exercise',
    Attempt: 'Attempt',
    PersonalBestAggregate: 'PersonalBestAggregate'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "exercise" | "attempt" | "personalBestAggregate"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Exercise: {
        payload: Prisma.$ExercisePayload<ExtArgs>
        fields: Prisma.ExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findFirst: {
            args: Prisma.ExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findMany: {
            args: Prisma.ExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          create: {
            args: Prisma.ExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          createMany: {
            args: Prisma.ExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          delete: {
            args: Prisma.ExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          update: {
            args: Prisma.ExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          deleteMany: {
            args: Prisma.ExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExerciseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          upsert: {
            args: Prisma.ExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          aggregate: {
            args: Prisma.ExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExercise>
          }
          groupBy: {
            args: Prisma.ExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciseCountAggregateOutputType> | number
          }
        }
      }
      Attempt: {
        payload: Prisma.$AttemptPayload<ExtArgs>
        fields: Prisma.AttemptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttemptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttemptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>
          }
          findFirst: {
            args: Prisma.AttemptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttemptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>
          }
          findMany: {
            args: Prisma.AttemptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>[]
          }
          create: {
            args: Prisma.AttemptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>
          }
          createMany: {
            args: Prisma.AttemptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttemptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>[]
          }
          delete: {
            args: Prisma.AttemptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>
          }
          update: {
            args: Prisma.AttemptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>
          }
          deleteMany: {
            args: Prisma.AttemptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttemptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttemptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>[]
          }
          upsert: {
            args: Prisma.AttemptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>
          }
          aggregate: {
            args: Prisma.AttemptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttempt>
          }
          groupBy: {
            args: Prisma.AttemptGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttemptGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttemptCountArgs<ExtArgs>
            result: $Utils.Optional<AttemptCountAggregateOutputType> | number
          }
        }
      }
      PersonalBestAggregate: {
        payload: Prisma.$PersonalBestAggregatePayload<ExtArgs>
        fields: Prisma.PersonalBestAggregateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonalBestAggregateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalBestAggregatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonalBestAggregateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalBestAggregatePayload>
          }
          findFirst: {
            args: Prisma.PersonalBestAggregateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalBestAggregatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonalBestAggregateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalBestAggregatePayload>
          }
          findMany: {
            args: Prisma.PersonalBestAggregateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalBestAggregatePayload>[]
          }
          create: {
            args: Prisma.PersonalBestAggregateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalBestAggregatePayload>
          }
          createMany: {
            args: Prisma.PersonalBestAggregateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonalBestAggregateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalBestAggregatePayload>[]
          }
          delete: {
            args: Prisma.PersonalBestAggregateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalBestAggregatePayload>
          }
          update: {
            args: Prisma.PersonalBestAggregateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalBestAggregatePayload>
          }
          deleteMany: {
            args: Prisma.PersonalBestAggregateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonalBestAggregateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonalBestAggregateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalBestAggregatePayload>[]
          }
          upsert: {
            args: Prisma.PersonalBestAggregateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalBestAggregatePayload>
          }
          aggregate: {
            args: Prisma.PersonalBestAggregateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonalBestAggregate>
          }
          groupBy: {
            args: Prisma.PersonalBestAggregateGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonalBestAggregateGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonalBestAggregateCountArgs<ExtArgs>
            result: $Utils.Optional<PersonalBestAggregateCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    exercise?: ExerciseOmit
    attempt?: AttemptOmit
    personalBestAggregate?: PersonalBestAggregateOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ExerciseCountOutputType
   */

  export type ExerciseCountOutputType = {
    attempts: number
    personalBestAggregates: number
  }

  export type ExerciseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attempts?: boolean | ExerciseCountOutputTypeCountAttemptsArgs
    personalBestAggregates?: boolean | ExerciseCountOutputTypeCountPersonalBestAggregatesArgs
  }

  // Custom InputTypes
  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseCountOutputType
     */
    select?: ExerciseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeCountAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttemptWhereInput
  }

  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeCountPersonalBestAggregatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonalBestAggregateWhereInput
  }


  /**
   * Count Type AttemptCountOutputType
   */

  export type AttemptCountOutputType = {
    personalBestAggregates: number
  }

  export type AttemptCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personalBestAggregates?: boolean | AttemptCountOutputTypeCountPersonalBestAggregatesArgs
  }

  // Custom InputTypes
  /**
   * AttemptCountOutputType without action
   */
  export type AttemptCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptCountOutputType
     */
    select?: AttemptCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AttemptCountOutputType without action
   */
  export type AttemptCountOutputTypeCountPersonalBestAggregatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonalBestAggregateWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Exercise
   */

  export type AggregateExercise = {
    _count: ExerciseCountAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  export type ExerciseMinAggregateOutputType = {
    id: string | null
    name: string | null
    currentPersonalBestId: string | null
    modality: $Enums.TrainingModality | null
    dateLastTrained: Date | null
    measurementUnit: $Enums.MeasurementUnit | null
  }

  export type ExerciseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    currentPersonalBestId: string | null
    modality: $Enums.TrainingModality | null
    dateLastTrained: Date | null
    measurementUnit: $Enums.MeasurementUnit | null
  }

  export type ExerciseCountAggregateOutputType = {
    id: number
    name: number
    currentPersonalBestId: number
    modality: number
    dateLastTrained: number
    measurementUnit: number
    _all: number
  }


  export type ExerciseMinAggregateInputType = {
    id?: true
    name?: true
    currentPersonalBestId?: true
    modality?: true
    dateLastTrained?: true
    measurementUnit?: true
  }

  export type ExerciseMaxAggregateInputType = {
    id?: true
    name?: true
    currentPersonalBestId?: true
    modality?: true
    dateLastTrained?: true
    measurementUnit?: true
  }

  export type ExerciseCountAggregateInputType = {
    id?: true
    name?: true
    currentPersonalBestId?: true
    modality?: true
    dateLastTrained?: true
    measurementUnit?: true
    _all?: true
  }

  export type ExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercise to aggregate.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exercises
    **/
    _count?: true | ExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciseMaxAggregateInputType
  }

  export type GetExerciseAggregateType<T extends ExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExercise[P]>
      : GetScalarType<T[P], AggregateExercise[P]>
  }




  export type ExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseWhereInput
    orderBy?: ExerciseOrderByWithAggregationInput | ExerciseOrderByWithAggregationInput[]
    by: ExerciseScalarFieldEnum[] | ExerciseScalarFieldEnum
    having?: ExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciseCountAggregateInputType | true
    _min?: ExerciseMinAggregateInputType
    _max?: ExerciseMaxAggregateInputType
  }

  export type ExerciseGroupByOutputType = {
    id: string
    name: string
    currentPersonalBestId: string | null
    modality: $Enums.TrainingModality
    dateLastTrained: Date | null
    measurementUnit: $Enums.MeasurementUnit
    _count: ExerciseCountAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  type GetExerciseGroupByPayload<T extends ExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
        }
      >
    >


  export type ExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    currentPersonalBestId?: boolean
    modality?: boolean
    dateLastTrained?: boolean
    measurementUnit?: boolean
    attempts?: boolean | Exercise$attemptsArgs<ExtArgs>
    personalBestAggregates?: boolean | Exercise$personalBestAggregatesArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    currentPersonalBestId?: boolean
    modality?: boolean
    dateLastTrained?: boolean
    measurementUnit?: boolean
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    currentPersonalBestId?: boolean
    modality?: boolean
    dateLastTrained?: boolean
    measurementUnit?: boolean
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectScalar = {
    id?: boolean
    name?: boolean
    currentPersonalBestId?: boolean
    modality?: boolean
    dateLastTrained?: boolean
    measurementUnit?: boolean
  }

  export type ExerciseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "currentPersonalBestId" | "modality" | "dateLastTrained" | "measurementUnit", ExtArgs["result"]["exercise"]>
  export type ExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attempts?: boolean | Exercise$attemptsArgs<ExtArgs>
    personalBestAggregates?: boolean | Exercise$personalBestAggregatesArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExerciseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ExerciseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exercise"
    objects: {
      attempts: Prisma.$AttemptPayload<ExtArgs>[]
      personalBestAggregates: Prisma.$PersonalBestAggregatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      currentPersonalBestId: string | null
      modality: $Enums.TrainingModality
      dateLastTrained: Date | null
      measurementUnit: $Enums.MeasurementUnit
    }, ExtArgs["result"]["exercise"]>
    composites: {}
  }

  type ExerciseGetPayload<S extends boolean | null | undefined | ExerciseDefaultArgs> = $Result.GetResult<Prisma.$ExercisePayload, S>

  type ExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExerciseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExerciseCountAggregateInputType | true
    }

  export interface ExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exercise'], meta: { name: 'Exercise' } }
    /**
     * Find zero or one Exercise that matches the filter.
     * @param {ExerciseFindUniqueArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExerciseFindUniqueArgs>(args: SelectSubset<T, ExerciseFindUniqueArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exercise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExerciseFindUniqueOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExerciseFindFirstArgs>(args?: SelectSubset<T, ExerciseFindFirstArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exercises
     * const exercises = await prisma.exercise.findMany()
     * 
     * // Get first 10 Exercises
     * const exercises = await prisma.exercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exerciseWithIdOnly = await prisma.exercise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExerciseFindManyArgs>(args?: SelectSubset<T, ExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exercise.
     * @param {ExerciseCreateArgs} args - Arguments to create a Exercise.
     * @example
     * // Create one Exercise
     * const Exercise = await prisma.exercise.create({
     *   data: {
     *     // ... data to create a Exercise
     *   }
     * })
     * 
     */
    create<T extends ExerciseCreateArgs>(args: SelectSubset<T, ExerciseCreateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exercises.
     * @param {ExerciseCreateManyArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExerciseCreateManyArgs>(args?: SelectSubset<T, ExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exercises and returns the data saved in the database.
     * @param {ExerciseCreateManyAndReturnArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exercises and only return the `id`
     * const exerciseWithIdOnly = await prisma.exercise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exercise.
     * @param {ExerciseDeleteArgs} args - Arguments to delete one Exercise.
     * @example
     * // Delete one Exercise
     * const Exercise = await prisma.exercise.delete({
     *   where: {
     *     // ... filter to delete one Exercise
     *   }
     * })
     * 
     */
    delete<T extends ExerciseDeleteArgs>(args: SelectSubset<T, ExerciseDeleteArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exercise.
     * @param {ExerciseUpdateArgs} args - Arguments to update one Exercise.
     * @example
     * // Update one Exercise
     * const exercise = await prisma.exercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExerciseUpdateArgs>(args: SelectSubset<T, ExerciseUpdateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exercises.
     * @param {ExerciseDeleteManyArgs} args - Arguments to filter Exercises to delete.
     * @example
     * // Delete a few Exercises
     * const { count } = await prisma.exercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExerciseDeleteManyArgs>(args?: SelectSubset<T, ExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExerciseUpdateManyArgs>(args: SelectSubset<T, ExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises and returns the data updated in the database.
     * @param {ExerciseUpdateManyAndReturnArgs} args - Arguments to update many Exercises.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exercises and only return the `id`
     * const exerciseWithIdOnly = await prisma.exercise.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExerciseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExerciseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exercise.
     * @param {ExerciseUpsertArgs} args - Arguments to update or create a Exercise.
     * @example
     * // Update or create a Exercise
     * const exercise = await prisma.exercise.upsert({
     *   create: {
     *     // ... data to create a Exercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exercise we want to update
     *   }
     * })
     */
    upsert<T extends ExerciseUpsertArgs>(args: SelectSubset<T, ExerciseUpsertArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseCountArgs} args - Arguments to filter Exercises to count.
     * @example
     * // Count the number of Exercises
     * const count = await prisma.exercise.count({
     *   where: {
     *     // ... the filter for the Exercises we want to count
     *   }
     * })
    **/
    count<T extends ExerciseCountArgs>(
      args?: Subset<T, ExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExerciseAggregateArgs>(args: Subset<T, ExerciseAggregateArgs>): Prisma.PrismaPromise<GetExerciseAggregateType<T>>

    /**
     * Group by Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExerciseGroupByArgs['orderBy'] }
        : { orderBy?: ExerciseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exercise model
   */
  readonly fields: ExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attempts<T extends Exercise$attemptsArgs<ExtArgs> = {}>(args?: Subset<T, Exercise$attemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    personalBestAggregates<T extends Exercise$personalBestAggregatesArgs<ExtArgs> = {}>(args?: Subset<T, Exercise$personalBestAggregatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalBestAggregatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Exercise model
   */
  interface ExerciseFieldRefs {
    readonly id: FieldRef<"Exercise", 'String'>
    readonly name: FieldRef<"Exercise", 'String'>
    readonly currentPersonalBestId: FieldRef<"Exercise", 'String'>
    readonly modality: FieldRef<"Exercise", 'TrainingModality'>
    readonly dateLastTrained: FieldRef<"Exercise", 'DateTime'>
    readonly measurementUnit: FieldRef<"Exercise", 'MeasurementUnit'>
  }
    

  // Custom InputTypes
  /**
   * Exercise findUnique
   */
  export type ExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findUniqueOrThrow
   */
  export type ExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findFirst
   */
  export type ExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findFirstOrThrow
   */
  export type ExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findMany
   */
  export type ExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercises to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise create
   */
  export type ExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a Exercise.
     */
    data: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
  }

  /**
   * Exercise createMany
   */
  export type ExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exercise createManyAndReturn
   */
  export type ExerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exercise update
   */
  export type ExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a Exercise.
     */
    data: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
    /**
     * Choose, which Exercise to update.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise updateMany
   */
  export type ExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
  }

  /**
   * Exercise updateManyAndReturn
   */
  export type ExerciseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
  }

  /**
   * Exercise upsert
   */
  export type ExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the Exercise to update in case it exists.
     */
    where: ExerciseWhereUniqueInput
    /**
     * In case the Exercise found by the `where` argument doesn't exist, create a new Exercise with this data.
     */
    create: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
    /**
     * In case the Exercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
  }

  /**
   * Exercise delete
   */
  export type ExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter which Exercise to delete.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise deleteMany
   */
  export type ExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercises to delete
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to delete.
     */
    limit?: number
  }

  /**
   * Exercise.attempts
   */
  export type Exercise$attemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    where?: AttemptWhereInput
    orderBy?: AttemptOrderByWithRelationInput | AttemptOrderByWithRelationInput[]
    cursor?: AttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttemptScalarFieldEnum | AttemptScalarFieldEnum[]
  }

  /**
   * Exercise.personalBestAggregates
   */
  export type Exercise$personalBestAggregatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalBestAggregate
     */
    select?: PersonalBestAggregateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalBestAggregate
     */
    omit?: PersonalBestAggregateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalBestAggregateInclude<ExtArgs> | null
    where?: PersonalBestAggregateWhereInput
    orderBy?: PersonalBestAggregateOrderByWithRelationInput | PersonalBestAggregateOrderByWithRelationInput[]
    cursor?: PersonalBestAggregateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonalBestAggregateScalarFieldEnum | PersonalBestAggregateScalarFieldEnum[]
  }

  /**
   * Exercise without action
   */
  export type ExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
  }


  /**
   * Model Attempt
   */

  export type AggregateAttempt = {
    _count: AttemptCountAggregateOutputType | null
    _avg: AttemptAvgAggregateOutputType | null
    _sum: AttemptSumAggregateOutputType | null
    _min: AttemptMinAggregateOutputType | null
    _max: AttemptMaxAggregateOutputType | null
  }

  export type AttemptAvgAggregateOutputType = {
    numberOfReps: number | null
    timeInMinutes: number | null
    weightInKg: number | null
  }

  export type AttemptSumAggregateOutputType = {
    numberOfReps: number | null
    timeInMinutes: number | null
    weightInKg: number | null
  }

  export type AttemptMinAggregateOutputType = {
    id: string | null
    exerciseId: string | null
    numberOfReps: number | null
    timeInMinutes: number | null
    weightInKg: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttemptMaxAggregateOutputType = {
    id: string | null
    exerciseId: string | null
    numberOfReps: number | null
    timeInMinutes: number | null
    weightInKg: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttemptCountAggregateOutputType = {
    id: number
    exerciseId: number
    numberOfReps: number
    timeInMinutes: number
    weightInKg: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AttemptAvgAggregateInputType = {
    numberOfReps?: true
    timeInMinutes?: true
    weightInKg?: true
  }

  export type AttemptSumAggregateInputType = {
    numberOfReps?: true
    timeInMinutes?: true
    weightInKg?: true
  }

  export type AttemptMinAggregateInputType = {
    id?: true
    exerciseId?: true
    numberOfReps?: true
    timeInMinutes?: true
    weightInKg?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttemptMaxAggregateInputType = {
    id?: true
    exerciseId?: true
    numberOfReps?: true
    timeInMinutes?: true
    weightInKg?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttemptCountAggregateInputType = {
    id?: true
    exerciseId?: true
    numberOfReps?: true
    timeInMinutes?: true
    weightInKg?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AttemptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attempt to aggregate.
     */
    where?: AttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attempts to fetch.
     */
    orderBy?: AttemptOrderByWithRelationInput | AttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attempts
    **/
    _count?: true | AttemptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttemptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttemptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttemptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttemptMaxAggregateInputType
  }

  export type GetAttemptAggregateType<T extends AttemptAggregateArgs> = {
        [P in keyof T & keyof AggregateAttempt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttempt[P]>
      : GetScalarType<T[P], AggregateAttempt[P]>
  }




  export type AttemptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttemptWhereInput
    orderBy?: AttemptOrderByWithAggregationInput | AttemptOrderByWithAggregationInput[]
    by: AttemptScalarFieldEnum[] | AttemptScalarFieldEnum
    having?: AttemptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttemptCountAggregateInputType | true
    _avg?: AttemptAvgAggregateInputType
    _sum?: AttemptSumAggregateInputType
    _min?: AttemptMinAggregateInputType
    _max?: AttemptMaxAggregateInputType
  }

  export type AttemptGroupByOutputType = {
    id: string
    exerciseId: string
    numberOfReps: number | null
    timeInMinutes: number | null
    weightInKg: number
    createdAt: Date
    updatedAt: Date
    _count: AttemptCountAggregateOutputType | null
    _avg: AttemptAvgAggregateOutputType | null
    _sum: AttemptSumAggregateOutputType | null
    _min: AttemptMinAggregateOutputType | null
    _max: AttemptMaxAggregateOutputType | null
  }

  type GetAttemptGroupByPayload<T extends AttemptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttemptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttemptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttemptGroupByOutputType[P]>
            : GetScalarType<T[P], AttemptGroupByOutputType[P]>
        }
      >
    >


  export type AttemptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exerciseId?: boolean
    numberOfReps?: boolean
    timeInMinutes?: boolean
    weightInKg?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
    personalBestAggregates?: boolean | Attempt$personalBestAggregatesArgs<ExtArgs>
    _count?: boolean | AttemptCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attempt"]>

  export type AttemptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exerciseId?: boolean
    numberOfReps?: boolean
    timeInMinutes?: boolean
    weightInKg?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attempt"]>

  export type AttemptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exerciseId?: boolean
    numberOfReps?: boolean
    timeInMinutes?: boolean
    weightInKg?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attempt"]>

  export type AttemptSelectScalar = {
    id?: boolean
    exerciseId?: boolean
    numberOfReps?: boolean
    timeInMinutes?: boolean
    weightInKg?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AttemptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "exerciseId" | "numberOfReps" | "timeInMinutes" | "weightInKg" | "createdAt" | "updatedAt", ExtArgs["result"]["attempt"]>
  export type AttemptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
    personalBestAggregates?: boolean | Attempt$personalBestAggregatesArgs<ExtArgs>
    _count?: boolean | AttemptCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AttemptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }
  export type AttemptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }

  export type $AttemptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attempt"
    objects: {
      exercise: Prisma.$ExercisePayload<ExtArgs>
      personalBestAggregates: Prisma.$PersonalBestAggregatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      exerciseId: string
      numberOfReps: number | null
      timeInMinutes: number | null
      weightInKg: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["attempt"]>
    composites: {}
  }

  type AttemptGetPayload<S extends boolean | null | undefined | AttemptDefaultArgs> = $Result.GetResult<Prisma.$AttemptPayload, S>

  type AttemptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttemptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttemptCountAggregateInputType | true
    }

  export interface AttemptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attempt'], meta: { name: 'Attempt' } }
    /**
     * Find zero or one Attempt that matches the filter.
     * @param {AttemptFindUniqueArgs} args - Arguments to find a Attempt
     * @example
     * // Get one Attempt
     * const attempt = await prisma.attempt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttemptFindUniqueArgs>(args: SelectSubset<T, AttemptFindUniqueArgs<ExtArgs>>): Prisma__AttemptClient<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attempt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttemptFindUniqueOrThrowArgs} args - Arguments to find a Attempt
     * @example
     * // Get one Attempt
     * const attempt = await prisma.attempt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttemptFindUniqueOrThrowArgs>(args: SelectSubset<T, AttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttemptClient<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attempt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptFindFirstArgs} args - Arguments to find a Attempt
     * @example
     * // Get one Attempt
     * const attempt = await prisma.attempt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttemptFindFirstArgs>(args?: SelectSubset<T, AttemptFindFirstArgs<ExtArgs>>): Prisma__AttemptClient<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attempt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptFindFirstOrThrowArgs} args - Arguments to find a Attempt
     * @example
     * // Get one Attempt
     * const attempt = await prisma.attempt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttemptFindFirstOrThrowArgs>(args?: SelectSubset<T, AttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttemptClient<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attempts
     * const attempts = await prisma.attempt.findMany()
     * 
     * // Get first 10 Attempts
     * const attempts = await prisma.attempt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attemptWithIdOnly = await prisma.attempt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttemptFindManyArgs>(args?: SelectSubset<T, AttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attempt.
     * @param {AttemptCreateArgs} args - Arguments to create a Attempt.
     * @example
     * // Create one Attempt
     * const Attempt = await prisma.attempt.create({
     *   data: {
     *     // ... data to create a Attempt
     *   }
     * })
     * 
     */
    create<T extends AttemptCreateArgs>(args: SelectSubset<T, AttemptCreateArgs<ExtArgs>>): Prisma__AttemptClient<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attempts.
     * @param {AttemptCreateManyArgs} args - Arguments to create many Attempts.
     * @example
     * // Create many Attempts
     * const attempt = await prisma.attempt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttemptCreateManyArgs>(args?: SelectSubset<T, AttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attempts and returns the data saved in the database.
     * @param {AttemptCreateManyAndReturnArgs} args - Arguments to create many Attempts.
     * @example
     * // Create many Attempts
     * const attempt = await prisma.attempt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attempts and only return the `id`
     * const attemptWithIdOnly = await prisma.attempt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttemptCreateManyAndReturnArgs>(args?: SelectSubset<T, AttemptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attempt.
     * @param {AttemptDeleteArgs} args - Arguments to delete one Attempt.
     * @example
     * // Delete one Attempt
     * const Attempt = await prisma.attempt.delete({
     *   where: {
     *     // ... filter to delete one Attempt
     *   }
     * })
     * 
     */
    delete<T extends AttemptDeleteArgs>(args: SelectSubset<T, AttemptDeleteArgs<ExtArgs>>): Prisma__AttemptClient<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attempt.
     * @param {AttemptUpdateArgs} args - Arguments to update one Attempt.
     * @example
     * // Update one Attempt
     * const attempt = await prisma.attempt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttemptUpdateArgs>(args: SelectSubset<T, AttemptUpdateArgs<ExtArgs>>): Prisma__AttemptClient<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attempts.
     * @param {AttemptDeleteManyArgs} args - Arguments to filter Attempts to delete.
     * @example
     * // Delete a few Attempts
     * const { count } = await prisma.attempt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttemptDeleteManyArgs>(args?: SelectSubset<T, AttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attempts
     * const attempt = await prisma.attempt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttemptUpdateManyArgs>(args: SelectSubset<T, AttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attempts and returns the data updated in the database.
     * @param {AttemptUpdateManyAndReturnArgs} args - Arguments to update many Attempts.
     * @example
     * // Update many Attempts
     * const attempt = await prisma.attempt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attempts and only return the `id`
     * const attemptWithIdOnly = await prisma.attempt.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttemptUpdateManyAndReturnArgs>(args: SelectSubset<T, AttemptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attempt.
     * @param {AttemptUpsertArgs} args - Arguments to update or create a Attempt.
     * @example
     * // Update or create a Attempt
     * const attempt = await prisma.attempt.upsert({
     *   create: {
     *     // ... data to create a Attempt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attempt we want to update
     *   }
     * })
     */
    upsert<T extends AttemptUpsertArgs>(args: SelectSubset<T, AttemptUpsertArgs<ExtArgs>>): Prisma__AttemptClient<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptCountArgs} args - Arguments to filter Attempts to count.
     * @example
     * // Count the number of Attempts
     * const count = await prisma.attempt.count({
     *   where: {
     *     // ... the filter for the Attempts we want to count
     *   }
     * })
    **/
    count<T extends AttemptCountArgs>(
      args?: Subset<T, AttemptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttemptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttemptAggregateArgs>(args: Subset<T, AttemptAggregateArgs>): Prisma.PrismaPromise<GetAttemptAggregateType<T>>

    /**
     * Group by Attempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttemptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttemptGroupByArgs['orderBy'] }
        : { orderBy?: AttemptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attempt model
   */
  readonly fields: AttemptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attempt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttemptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exercise<T extends ExerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseDefaultArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    personalBestAggregates<T extends Attempt$personalBestAggregatesArgs<ExtArgs> = {}>(args?: Subset<T, Attempt$personalBestAggregatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalBestAggregatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Attempt model
   */
  interface AttemptFieldRefs {
    readonly id: FieldRef<"Attempt", 'String'>
    readonly exerciseId: FieldRef<"Attempt", 'String'>
    readonly numberOfReps: FieldRef<"Attempt", 'Int'>
    readonly timeInMinutes: FieldRef<"Attempt", 'Int'>
    readonly weightInKg: FieldRef<"Attempt", 'Int'>
    readonly createdAt: FieldRef<"Attempt", 'DateTime'>
    readonly updatedAt: FieldRef<"Attempt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attempt findUnique
   */
  export type AttemptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * Filter, which Attempt to fetch.
     */
    where: AttemptWhereUniqueInput
  }

  /**
   * Attempt findUniqueOrThrow
   */
  export type AttemptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * Filter, which Attempt to fetch.
     */
    where: AttemptWhereUniqueInput
  }

  /**
   * Attempt findFirst
   */
  export type AttemptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * Filter, which Attempt to fetch.
     */
    where?: AttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attempts to fetch.
     */
    orderBy?: AttemptOrderByWithRelationInput | AttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attempts.
     */
    cursor?: AttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attempts.
     */
    distinct?: AttemptScalarFieldEnum | AttemptScalarFieldEnum[]
  }

  /**
   * Attempt findFirstOrThrow
   */
  export type AttemptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * Filter, which Attempt to fetch.
     */
    where?: AttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attempts to fetch.
     */
    orderBy?: AttemptOrderByWithRelationInput | AttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attempts.
     */
    cursor?: AttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attempts.
     */
    distinct?: AttemptScalarFieldEnum | AttemptScalarFieldEnum[]
  }

  /**
   * Attempt findMany
   */
  export type AttemptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * Filter, which Attempts to fetch.
     */
    where?: AttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attempts to fetch.
     */
    orderBy?: AttemptOrderByWithRelationInput | AttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attempts.
     */
    cursor?: AttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attempts.
     */
    skip?: number
    distinct?: AttemptScalarFieldEnum | AttemptScalarFieldEnum[]
  }

  /**
   * Attempt create
   */
  export type AttemptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * The data needed to create a Attempt.
     */
    data: XOR<AttemptCreateInput, AttemptUncheckedCreateInput>
  }

  /**
   * Attempt createMany
   */
  export type AttemptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attempts.
     */
    data: AttemptCreateManyInput | AttemptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attempt createManyAndReturn
   */
  export type AttemptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * The data used to create many Attempts.
     */
    data: AttemptCreateManyInput | AttemptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attempt update
   */
  export type AttemptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * The data needed to update a Attempt.
     */
    data: XOR<AttemptUpdateInput, AttemptUncheckedUpdateInput>
    /**
     * Choose, which Attempt to update.
     */
    where: AttemptWhereUniqueInput
  }

  /**
   * Attempt updateMany
   */
  export type AttemptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attempts.
     */
    data: XOR<AttemptUpdateManyMutationInput, AttemptUncheckedUpdateManyInput>
    /**
     * Filter which Attempts to update
     */
    where?: AttemptWhereInput
    /**
     * Limit how many Attempts to update.
     */
    limit?: number
  }

  /**
   * Attempt updateManyAndReturn
   */
  export type AttemptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * The data used to update Attempts.
     */
    data: XOR<AttemptUpdateManyMutationInput, AttemptUncheckedUpdateManyInput>
    /**
     * Filter which Attempts to update
     */
    where?: AttemptWhereInput
    /**
     * Limit how many Attempts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attempt upsert
   */
  export type AttemptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * The filter to search for the Attempt to update in case it exists.
     */
    where: AttemptWhereUniqueInput
    /**
     * In case the Attempt found by the `where` argument doesn't exist, create a new Attempt with this data.
     */
    create: XOR<AttemptCreateInput, AttemptUncheckedCreateInput>
    /**
     * In case the Attempt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttemptUpdateInput, AttemptUncheckedUpdateInput>
  }

  /**
   * Attempt delete
   */
  export type AttemptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * Filter which Attempt to delete.
     */
    where: AttemptWhereUniqueInput
  }

  /**
   * Attempt deleteMany
   */
  export type AttemptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attempts to delete
     */
    where?: AttemptWhereInput
    /**
     * Limit how many Attempts to delete.
     */
    limit?: number
  }

  /**
   * Attempt.personalBestAggregates
   */
  export type Attempt$personalBestAggregatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalBestAggregate
     */
    select?: PersonalBestAggregateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalBestAggregate
     */
    omit?: PersonalBestAggregateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalBestAggregateInclude<ExtArgs> | null
    where?: PersonalBestAggregateWhereInput
    orderBy?: PersonalBestAggregateOrderByWithRelationInput | PersonalBestAggregateOrderByWithRelationInput[]
    cursor?: PersonalBestAggregateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonalBestAggregateScalarFieldEnum | PersonalBestAggregateScalarFieldEnum[]
  }

  /**
   * Attempt without action
   */
  export type AttemptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
  }


  /**
   * Model PersonalBestAggregate
   */

  export type AggregatePersonalBestAggregate = {
    _count: PersonalBestAggregateCountAggregateOutputType | null
    _avg: PersonalBestAggregateAvgAggregateOutputType | null
    _sum: PersonalBestAggregateSumAggregateOutputType | null
    _min: PersonalBestAggregateMinAggregateOutputType | null
    _max: PersonalBestAggregateMaxAggregateOutputType | null
  }

  export type PersonalBestAggregateAvgAggregateOutputType = {
    numberOfReps: number | null
    timeInMinutes: number | null
    weightInKg: number | null
    amountAboveLastPb: number | null
  }

  export type PersonalBestAggregateSumAggregateOutputType = {
    numberOfReps: number | null
    timeInMinutes: number | null
    weightInKg: number | null
    amountAboveLastPb: number | null
  }

  export type PersonalBestAggregateMinAggregateOutputType = {
    id: string | null
    attemptId: string | null
    exerciseId: string | null
    exerciseName: string | null
    measurementUnit: $Enums.MeasurementUnit | null
    numberOfReps: number | null
    timeInMinutes: number | null
    weightInKg: number | null
    date: Date | null
    amountAboveLastPb: number | null
  }

  export type PersonalBestAggregateMaxAggregateOutputType = {
    id: string | null
    attemptId: string | null
    exerciseId: string | null
    exerciseName: string | null
    measurementUnit: $Enums.MeasurementUnit | null
    numberOfReps: number | null
    timeInMinutes: number | null
    weightInKg: number | null
    date: Date | null
    amountAboveLastPb: number | null
  }

  export type PersonalBestAggregateCountAggregateOutputType = {
    id: number
    attemptId: number
    exerciseId: number
    exerciseName: number
    measurementUnit: number
    numberOfReps: number
    timeInMinutes: number
    weightInKg: number
    date: number
    amountAboveLastPb: number
    _all: number
  }


  export type PersonalBestAggregateAvgAggregateInputType = {
    numberOfReps?: true
    timeInMinutes?: true
    weightInKg?: true
    amountAboveLastPb?: true
  }

  export type PersonalBestAggregateSumAggregateInputType = {
    numberOfReps?: true
    timeInMinutes?: true
    weightInKg?: true
    amountAboveLastPb?: true
  }

  export type PersonalBestAggregateMinAggregateInputType = {
    id?: true
    attemptId?: true
    exerciseId?: true
    exerciseName?: true
    measurementUnit?: true
    numberOfReps?: true
    timeInMinutes?: true
    weightInKg?: true
    date?: true
    amountAboveLastPb?: true
  }

  export type PersonalBestAggregateMaxAggregateInputType = {
    id?: true
    attemptId?: true
    exerciseId?: true
    exerciseName?: true
    measurementUnit?: true
    numberOfReps?: true
    timeInMinutes?: true
    weightInKg?: true
    date?: true
    amountAboveLastPb?: true
  }

  export type PersonalBestAggregateCountAggregateInputType = {
    id?: true
    attemptId?: true
    exerciseId?: true
    exerciseName?: true
    measurementUnit?: true
    numberOfReps?: true
    timeInMinutes?: true
    weightInKg?: true
    date?: true
    amountAboveLastPb?: true
    _all?: true
  }

  export type PersonalBestAggregateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonalBestAggregate to aggregate.
     */
    where?: PersonalBestAggregateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalBestAggregates to fetch.
     */
    orderBy?: PersonalBestAggregateOrderByWithRelationInput | PersonalBestAggregateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonalBestAggregateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalBestAggregates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalBestAggregates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PersonalBestAggregates
    **/
    _count?: true | PersonalBestAggregateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonalBestAggregateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonalBestAggregateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonalBestAggregateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonalBestAggregateMaxAggregateInputType
  }

  export type GetPersonalBestAggregateAggregateType<T extends PersonalBestAggregateAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonalBestAggregate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonalBestAggregate[P]>
      : GetScalarType<T[P], AggregatePersonalBestAggregate[P]>
  }




  export type PersonalBestAggregateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonalBestAggregateWhereInput
    orderBy?: PersonalBestAggregateOrderByWithAggregationInput | PersonalBestAggregateOrderByWithAggregationInput[]
    by: PersonalBestAggregateScalarFieldEnum[] | PersonalBestAggregateScalarFieldEnum
    having?: PersonalBestAggregateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonalBestAggregateCountAggregateInputType | true
    _avg?: PersonalBestAggregateAvgAggregateInputType
    _sum?: PersonalBestAggregateSumAggregateInputType
    _min?: PersonalBestAggregateMinAggregateInputType
    _max?: PersonalBestAggregateMaxAggregateInputType
  }

  export type PersonalBestAggregateGroupByOutputType = {
    id: string
    attemptId: string
    exerciseId: string
    exerciseName: string
    measurementUnit: $Enums.MeasurementUnit
    numberOfReps: number | null
    timeInMinutes: number | null
    weightInKg: number
    date: Date
    amountAboveLastPb: number
    _count: PersonalBestAggregateCountAggregateOutputType | null
    _avg: PersonalBestAggregateAvgAggregateOutputType | null
    _sum: PersonalBestAggregateSumAggregateOutputType | null
    _min: PersonalBestAggregateMinAggregateOutputType | null
    _max: PersonalBestAggregateMaxAggregateOutputType | null
  }

  type GetPersonalBestAggregateGroupByPayload<T extends PersonalBestAggregateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonalBestAggregateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonalBestAggregateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonalBestAggregateGroupByOutputType[P]>
            : GetScalarType<T[P], PersonalBestAggregateGroupByOutputType[P]>
        }
      >
    >


  export type PersonalBestAggregateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attemptId?: boolean
    exerciseId?: boolean
    exerciseName?: boolean
    measurementUnit?: boolean
    numberOfReps?: boolean
    timeInMinutes?: boolean
    weightInKg?: boolean
    date?: boolean
    amountAboveLastPb?: boolean
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
    attempt?: boolean | AttemptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personalBestAggregate"]>

  export type PersonalBestAggregateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attemptId?: boolean
    exerciseId?: boolean
    exerciseName?: boolean
    measurementUnit?: boolean
    numberOfReps?: boolean
    timeInMinutes?: boolean
    weightInKg?: boolean
    date?: boolean
    amountAboveLastPb?: boolean
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
    attempt?: boolean | AttemptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personalBestAggregate"]>

  export type PersonalBestAggregateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attemptId?: boolean
    exerciseId?: boolean
    exerciseName?: boolean
    measurementUnit?: boolean
    numberOfReps?: boolean
    timeInMinutes?: boolean
    weightInKg?: boolean
    date?: boolean
    amountAboveLastPb?: boolean
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
    attempt?: boolean | AttemptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personalBestAggregate"]>

  export type PersonalBestAggregateSelectScalar = {
    id?: boolean
    attemptId?: boolean
    exerciseId?: boolean
    exerciseName?: boolean
    measurementUnit?: boolean
    numberOfReps?: boolean
    timeInMinutes?: boolean
    weightInKg?: boolean
    date?: boolean
    amountAboveLastPb?: boolean
  }

  export type PersonalBestAggregateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "attemptId" | "exerciseId" | "exerciseName" | "measurementUnit" | "numberOfReps" | "timeInMinutes" | "weightInKg" | "date" | "amountAboveLastPb", ExtArgs["result"]["personalBestAggregate"]>
  export type PersonalBestAggregateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
    attempt?: boolean | AttemptDefaultArgs<ExtArgs>
  }
  export type PersonalBestAggregateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
    attempt?: boolean | AttemptDefaultArgs<ExtArgs>
  }
  export type PersonalBestAggregateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
    attempt?: boolean | AttemptDefaultArgs<ExtArgs>
  }

  export type $PersonalBestAggregatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PersonalBestAggregate"
    objects: {
      exercise: Prisma.$ExercisePayload<ExtArgs>
      attempt: Prisma.$AttemptPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      attemptId: string
      exerciseId: string
      exerciseName: string
      measurementUnit: $Enums.MeasurementUnit
      numberOfReps: number | null
      timeInMinutes: number | null
      weightInKg: number
      date: Date
      amountAboveLastPb: number
    }, ExtArgs["result"]["personalBestAggregate"]>
    composites: {}
  }

  type PersonalBestAggregateGetPayload<S extends boolean | null | undefined | PersonalBestAggregateDefaultArgs> = $Result.GetResult<Prisma.$PersonalBestAggregatePayload, S>

  type PersonalBestAggregateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonalBestAggregateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonalBestAggregateCountAggregateInputType | true
    }

  export interface PersonalBestAggregateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PersonalBestAggregate'], meta: { name: 'PersonalBestAggregate' } }
    /**
     * Find zero or one PersonalBestAggregate that matches the filter.
     * @param {PersonalBestAggregateFindUniqueArgs} args - Arguments to find a PersonalBestAggregate
     * @example
     * // Get one PersonalBestAggregate
     * const personalBestAggregate = await prisma.personalBestAggregate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonalBestAggregateFindUniqueArgs>(args: SelectSubset<T, PersonalBestAggregateFindUniqueArgs<ExtArgs>>): Prisma__PersonalBestAggregateClient<$Result.GetResult<Prisma.$PersonalBestAggregatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PersonalBestAggregate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonalBestAggregateFindUniqueOrThrowArgs} args - Arguments to find a PersonalBestAggregate
     * @example
     * // Get one PersonalBestAggregate
     * const personalBestAggregate = await prisma.personalBestAggregate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonalBestAggregateFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonalBestAggregateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonalBestAggregateClient<$Result.GetResult<Prisma.$PersonalBestAggregatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PersonalBestAggregate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalBestAggregateFindFirstArgs} args - Arguments to find a PersonalBestAggregate
     * @example
     * // Get one PersonalBestAggregate
     * const personalBestAggregate = await prisma.personalBestAggregate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonalBestAggregateFindFirstArgs>(args?: SelectSubset<T, PersonalBestAggregateFindFirstArgs<ExtArgs>>): Prisma__PersonalBestAggregateClient<$Result.GetResult<Prisma.$PersonalBestAggregatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PersonalBestAggregate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalBestAggregateFindFirstOrThrowArgs} args - Arguments to find a PersonalBestAggregate
     * @example
     * // Get one PersonalBestAggregate
     * const personalBestAggregate = await prisma.personalBestAggregate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonalBestAggregateFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonalBestAggregateFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonalBestAggregateClient<$Result.GetResult<Prisma.$PersonalBestAggregatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PersonalBestAggregates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalBestAggregateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PersonalBestAggregates
     * const personalBestAggregates = await prisma.personalBestAggregate.findMany()
     * 
     * // Get first 10 PersonalBestAggregates
     * const personalBestAggregates = await prisma.personalBestAggregate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personalBestAggregateWithIdOnly = await prisma.personalBestAggregate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonalBestAggregateFindManyArgs>(args?: SelectSubset<T, PersonalBestAggregateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalBestAggregatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PersonalBestAggregate.
     * @param {PersonalBestAggregateCreateArgs} args - Arguments to create a PersonalBestAggregate.
     * @example
     * // Create one PersonalBestAggregate
     * const PersonalBestAggregate = await prisma.personalBestAggregate.create({
     *   data: {
     *     // ... data to create a PersonalBestAggregate
     *   }
     * })
     * 
     */
    create<T extends PersonalBestAggregateCreateArgs>(args: SelectSubset<T, PersonalBestAggregateCreateArgs<ExtArgs>>): Prisma__PersonalBestAggregateClient<$Result.GetResult<Prisma.$PersonalBestAggregatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PersonalBestAggregates.
     * @param {PersonalBestAggregateCreateManyArgs} args - Arguments to create many PersonalBestAggregates.
     * @example
     * // Create many PersonalBestAggregates
     * const personalBestAggregate = await prisma.personalBestAggregate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonalBestAggregateCreateManyArgs>(args?: SelectSubset<T, PersonalBestAggregateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PersonalBestAggregates and returns the data saved in the database.
     * @param {PersonalBestAggregateCreateManyAndReturnArgs} args - Arguments to create many PersonalBestAggregates.
     * @example
     * // Create many PersonalBestAggregates
     * const personalBestAggregate = await prisma.personalBestAggregate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PersonalBestAggregates and only return the `id`
     * const personalBestAggregateWithIdOnly = await prisma.personalBestAggregate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonalBestAggregateCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonalBestAggregateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalBestAggregatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PersonalBestAggregate.
     * @param {PersonalBestAggregateDeleteArgs} args - Arguments to delete one PersonalBestAggregate.
     * @example
     * // Delete one PersonalBestAggregate
     * const PersonalBestAggregate = await prisma.personalBestAggregate.delete({
     *   where: {
     *     // ... filter to delete one PersonalBestAggregate
     *   }
     * })
     * 
     */
    delete<T extends PersonalBestAggregateDeleteArgs>(args: SelectSubset<T, PersonalBestAggregateDeleteArgs<ExtArgs>>): Prisma__PersonalBestAggregateClient<$Result.GetResult<Prisma.$PersonalBestAggregatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PersonalBestAggregate.
     * @param {PersonalBestAggregateUpdateArgs} args - Arguments to update one PersonalBestAggregate.
     * @example
     * // Update one PersonalBestAggregate
     * const personalBestAggregate = await prisma.personalBestAggregate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonalBestAggregateUpdateArgs>(args: SelectSubset<T, PersonalBestAggregateUpdateArgs<ExtArgs>>): Prisma__PersonalBestAggregateClient<$Result.GetResult<Prisma.$PersonalBestAggregatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PersonalBestAggregates.
     * @param {PersonalBestAggregateDeleteManyArgs} args - Arguments to filter PersonalBestAggregates to delete.
     * @example
     * // Delete a few PersonalBestAggregates
     * const { count } = await prisma.personalBestAggregate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonalBestAggregateDeleteManyArgs>(args?: SelectSubset<T, PersonalBestAggregateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PersonalBestAggregates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalBestAggregateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PersonalBestAggregates
     * const personalBestAggregate = await prisma.personalBestAggregate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonalBestAggregateUpdateManyArgs>(args: SelectSubset<T, PersonalBestAggregateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PersonalBestAggregates and returns the data updated in the database.
     * @param {PersonalBestAggregateUpdateManyAndReturnArgs} args - Arguments to update many PersonalBestAggregates.
     * @example
     * // Update many PersonalBestAggregates
     * const personalBestAggregate = await prisma.personalBestAggregate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PersonalBestAggregates and only return the `id`
     * const personalBestAggregateWithIdOnly = await prisma.personalBestAggregate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PersonalBestAggregateUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonalBestAggregateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalBestAggregatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PersonalBestAggregate.
     * @param {PersonalBestAggregateUpsertArgs} args - Arguments to update or create a PersonalBestAggregate.
     * @example
     * // Update or create a PersonalBestAggregate
     * const personalBestAggregate = await prisma.personalBestAggregate.upsert({
     *   create: {
     *     // ... data to create a PersonalBestAggregate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PersonalBestAggregate we want to update
     *   }
     * })
     */
    upsert<T extends PersonalBestAggregateUpsertArgs>(args: SelectSubset<T, PersonalBestAggregateUpsertArgs<ExtArgs>>): Prisma__PersonalBestAggregateClient<$Result.GetResult<Prisma.$PersonalBestAggregatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PersonalBestAggregates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalBestAggregateCountArgs} args - Arguments to filter PersonalBestAggregates to count.
     * @example
     * // Count the number of PersonalBestAggregates
     * const count = await prisma.personalBestAggregate.count({
     *   where: {
     *     // ... the filter for the PersonalBestAggregates we want to count
     *   }
     * })
    **/
    count<T extends PersonalBestAggregateCountArgs>(
      args?: Subset<T, PersonalBestAggregateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonalBestAggregateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PersonalBestAggregate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalBestAggregateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonalBestAggregateAggregateArgs>(args: Subset<T, PersonalBestAggregateAggregateArgs>): Prisma.PrismaPromise<GetPersonalBestAggregateAggregateType<T>>

    /**
     * Group by PersonalBestAggregate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalBestAggregateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PersonalBestAggregateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonalBestAggregateGroupByArgs['orderBy'] }
        : { orderBy?: PersonalBestAggregateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PersonalBestAggregateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonalBestAggregateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PersonalBestAggregate model
   */
  readonly fields: PersonalBestAggregateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PersonalBestAggregate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonalBestAggregateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exercise<T extends ExerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseDefaultArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attempt<T extends AttemptDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AttemptDefaultArgs<ExtArgs>>): Prisma__AttemptClient<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PersonalBestAggregate model
   */
  interface PersonalBestAggregateFieldRefs {
    readonly id: FieldRef<"PersonalBestAggregate", 'String'>
    readonly attemptId: FieldRef<"PersonalBestAggregate", 'String'>
    readonly exerciseId: FieldRef<"PersonalBestAggregate", 'String'>
    readonly exerciseName: FieldRef<"PersonalBestAggregate", 'String'>
    readonly measurementUnit: FieldRef<"PersonalBestAggregate", 'MeasurementUnit'>
    readonly numberOfReps: FieldRef<"PersonalBestAggregate", 'Int'>
    readonly timeInMinutes: FieldRef<"PersonalBestAggregate", 'Int'>
    readonly weightInKg: FieldRef<"PersonalBestAggregate", 'Int'>
    readonly date: FieldRef<"PersonalBestAggregate", 'DateTime'>
    readonly amountAboveLastPb: FieldRef<"PersonalBestAggregate", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PersonalBestAggregate findUnique
   */
  export type PersonalBestAggregateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalBestAggregate
     */
    select?: PersonalBestAggregateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalBestAggregate
     */
    omit?: PersonalBestAggregateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalBestAggregateInclude<ExtArgs> | null
    /**
     * Filter, which PersonalBestAggregate to fetch.
     */
    where: PersonalBestAggregateWhereUniqueInput
  }

  /**
   * PersonalBestAggregate findUniqueOrThrow
   */
  export type PersonalBestAggregateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalBestAggregate
     */
    select?: PersonalBestAggregateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalBestAggregate
     */
    omit?: PersonalBestAggregateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalBestAggregateInclude<ExtArgs> | null
    /**
     * Filter, which PersonalBestAggregate to fetch.
     */
    where: PersonalBestAggregateWhereUniqueInput
  }

  /**
   * PersonalBestAggregate findFirst
   */
  export type PersonalBestAggregateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalBestAggregate
     */
    select?: PersonalBestAggregateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalBestAggregate
     */
    omit?: PersonalBestAggregateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalBestAggregateInclude<ExtArgs> | null
    /**
     * Filter, which PersonalBestAggregate to fetch.
     */
    where?: PersonalBestAggregateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalBestAggregates to fetch.
     */
    orderBy?: PersonalBestAggregateOrderByWithRelationInput | PersonalBestAggregateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonalBestAggregates.
     */
    cursor?: PersonalBestAggregateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalBestAggregates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalBestAggregates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonalBestAggregates.
     */
    distinct?: PersonalBestAggregateScalarFieldEnum | PersonalBestAggregateScalarFieldEnum[]
  }

  /**
   * PersonalBestAggregate findFirstOrThrow
   */
  export type PersonalBestAggregateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalBestAggregate
     */
    select?: PersonalBestAggregateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalBestAggregate
     */
    omit?: PersonalBestAggregateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalBestAggregateInclude<ExtArgs> | null
    /**
     * Filter, which PersonalBestAggregate to fetch.
     */
    where?: PersonalBestAggregateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalBestAggregates to fetch.
     */
    orderBy?: PersonalBestAggregateOrderByWithRelationInput | PersonalBestAggregateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonalBestAggregates.
     */
    cursor?: PersonalBestAggregateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalBestAggregates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalBestAggregates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonalBestAggregates.
     */
    distinct?: PersonalBestAggregateScalarFieldEnum | PersonalBestAggregateScalarFieldEnum[]
  }

  /**
   * PersonalBestAggregate findMany
   */
  export type PersonalBestAggregateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalBestAggregate
     */
    select?: PersonalBestAggregateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalBestAggregate
     */
    omit?: PersonalBestAggregateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalBestAggregateInclude<ExtArgs> | null
    /**
     * Filter, which PersonalBestAggregates to fetch.
     */
    where?: PersonalBestAggregateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalBestAggregates to fetch.
     */
    orderBy?: PersonalBestAggregateOrderByWithRelationInput | PersonalBestAggregateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PersonalBestAggregates.
     */
    cursor?: PersonalBestAggregateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalBestAggregates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalBestAggregates.
     */
    skip?: number
    distinct?: PersonalBestAggregateScalarFieldEnum | PersonalBestAggregateScalarFieldEnum[]
  }

  /**
   * PersonalBestAggregate create
   */
  export type PersonalBestAggregateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalBestAggregate
     */
    select?: PersonalBestAggregateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalBestAggregate
     */
    omit?: PersonalBestAggregateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalBestAggregateInclude<ExtArgs> | null
    /**
     * The data needed to create a PersonalBestAggregate.
     */
    data: XOR<PersonalBestAggregateCreateInput, PersonalBestAggregateUncheckedCreateInput>
  }

  /**
   * PersonalBestAggregate createMany
   */
  export type PersonalBestAggregateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PersonalBestAggregates.
     */
    data: PersonalBestAggregateCreateManyInput | PersonalBestAggregateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PersonalBestAggregate createManyAndReturn
   */
  export type PersonalBestAggregateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalBestAggregate
     */
    select?: PersonalBestAggregateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalBestAggregate
     */
    omit?: PersonalBestAggregateOmit<ExtArgs> | null
    /**
     * The data used to create many PersonalBestAggregates.
     */
    data: PersonalBestAggregateCreateManyInput | PersonalBestAggregateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalBestAggregateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PersonalBestAggregate update
   */
  export type PersonalBestAggregateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalBestAggregate
     */
    select?: PersonalBestAggregateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalBestAggregate
     */
    omit?: PersonalBestAggregateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalBestAggregateInclude<ExtArgs> | null
    /**
     * The data needed to update a PersonalBestAggregate.
     */
    data: XOR<PersonalBestAggregateUpdateInput, PersonalBestAggregateUncheckedUpdateInput>
    /**
     * Choose, which PersonalBestAggregate to update.
     */
    where: PersonalBestAggregateWhereUniqueInput
  }

  /**
   * PersonalBestAggregate updateMany
   */
  export type PersonalBestAggregateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PersonalBestAggregates.
     */
    data: XOR<PersonalBestAggregateUpdateManyMutationInput, PersonalBestAggregateUncheckedUpdateManyInput>
    /**
     * Filter which PersonalBestAggregates to update
     */
    where?: PersonalBestAggregateWhereInput
    /**
     * Limit how many PersonalBestAggregates to update.
     */
    limit?: number
  }

  /**
   * PersonalBestAggregate updateManyAndReturn
   */
  export type PersonalBestAggregateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalBestAggregate
     */
    select?: PersonalBestAggregateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalBestAggregate
     */
    omit?: PersonalBestAggregateOmit<ExtArgs> | null
    /**
     * The data used to update PersonalBestAggregates.
     */
    data: XOR<PersonalBestAggregateUpdateManyMutationInput, PersonalBestAggregateUncheckedUpdateManyInput>
    /**
     * Filter which PersonalBestAggregates to update
     */
    where?: PersonalBestAggregateWhereInput
    /**
     * Limit how many PersonalBestAggregates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalBestAggregateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PersonalBestAggregate upsert
   */
  export type PersonalBestAggregateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalBestAggregate
     */
    select?: PersonalBestAggregateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalBestAggregate
     */
    omit?: PersonalBestAggregateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalBestAggregateInclude<ExtArgs> | null
    /**
     * The filter to search for the PersonalBestAggregate to update in case it exists.
     */
    where: PersonalBestAggregateWhereUniqueInput
    /**
     * In case the PersonalBestAggregate found by the `where` argument doesn't exist, create a new PersonalBestAggregate with this data.
     */
    create: XOR<PersonalBestAggregateCreateInput, PersonalBestAggregateUncheckedCreateInput>
    /**
     * In case the PersonalBestAggregate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonalBestAggregateUpdateInput, PersonalBestAggregateUncheckedUpdateInput>
  }

  /**
   * PersonalBestAggregate delete
   */
  export type PersonalBestAggregateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalBestAggregate
     */
    select?: PersonalBestAggregateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalBestAggregate
     */
    omit?: PersonalBestAggregateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalBestAggregateInclude<ExtArgs> | null
    /**
     * Filter which PersonalBestAggregate to delete.
     */
    where: PersonalBestAggregateWhereUniqueInput
  }

  /**
   * PersonalBestAggregate deleteMany
   */
  export type PersonalBestAggregateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonalBestAggregates to delete
     */
    where?: PersonalBestAggregateWhereInput
    /**
     * Limit how many PersonalBestAggregates to delete.
     */
    limit?: number
  }

  /**
   * PersonalBestAggregate without action
   */
  export type PersonalBestAggregateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalBestAggregate
     */
    select?: PersonalBestAggregateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalBestAggregate
     */
    omit?: PersonalBestAggregateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalBestAggregateInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ExerciseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    currentPersonalBestId: 'currentPersonalBestId',
    modality: 'modality',
    dateLastTrained: 'dateLastTrained',
    measurementUnit: 'measurementUnit'
  };

  export type ExerciseScalarFieldEnum = (typeof ExerciseScalarFieldEnum)[keyof typeof ExerciseScalarFieldEnum]


  export const AttemptScalarFieldEnum: {
    id: 'id',
    exerciseId: 'exerciseId',
    numberOfReps: 'numberOfReps',
    timeInMinutes: 'timeInMinutes',
    weightInKg: 'weightInKg',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AttemptScalarFieldEnum = (typeof AttemptScalarFieldEnum)[keyof typeof AttemptScalarFieldEnum]


  export const PersonalBestAggregateScalarFieldEnum: {
    id: 'id',
    attemptId: 'attemptId',
    exerciseId: 'exerciseId',
    exerciseName: 'exerciseName',
    measurementUnit: 'measurementUnit',
    numberOfReps: 'numberOfReps',
    timeInMinutes: 'timeInMinutes',
    weightInKg: 'weightInKg',
    date: 'date',
    amountAboveLastPb: 'amountAboveLastPb'
  };

  export type PersonalBestAggregateScalarFieldEnum = (typeof PersonalBestAggregateScalarFieldEnum)[keyof typeof PersonalBestAggregateScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'TrainingModality'
   */
  export type EnumTrainingModalityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TrainingModality'>
    


  /**
   * Reference to a field of type 'TrainingModality[]'
   */
  export type ListEnumTrainingModalityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TrainingModality[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'MeasurementUnit'
   */
  export type EnumMeasurementUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MeasurementUnit'>
    


  /**
   * Reference to a field of type 'MeasurementUnit[]'
   */
  export type ListEnumMeasurementUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MeasurementUnit[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ExerciseWhereInput = {
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    id?: UuidFilter<"Exercise"> | string
    name?: StringFilter<"Exercise"> | string
    currentPersonalBestId?: UuidNullableFilter<"Exercise"> | string | null
    modality?: EnumTrainingModalityFilter<"Exercise"> | $Enums.TrainingModality
    dateLastTrained?: DateTimeNullableFilter<"Exercise"> | Date | string | null
    measurementUnit?: EnumMeasurementUnitFilter<"Exercise"> | $Enums.MeasurementUnit
    attempts?: AttemptListRelationFilter
    personalBestAggregates?: PersonalBestAggregateListRelationFilter
  }

  export type ExerciseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    currentPersonalBestId?: SortOrderInput | SortOrder
    modality?: SortOrder
    dateLastTrained?: SortOrderInput | SortOrder
    measurementUnit?: SortOrder
    attempts?: AttemptOrderByRelationAggregateInput
    personalBestAggregates?: PersonalBestAggregateOrderByRelationAggregateInput
  }

  export type ExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    name?: StringFilter<"Exercise"> | string
    currentPersonalBestId?: UuidNullableFilter<"Exercise"> | string | null
    modality?: EnumTrainingModalityFilter<"Exercise"> | $Enums.TrainingModality
    dateLastTrained?: DateTimeNullableFilter<"Exercise"> | Date | string | null
    measurementUnit?: EnumMeasurementUnitFilter<"Exercise"> | $Enums.MeasurementUnit
    attempts?: AttemptListRelationFilter
    personalBestAggregates?: PersonalBestAggregateListRelationFilter
  }, "id">

  export type ExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    currentPersonalBestId?: SortOrderInput | SortOrder
    modality?: SortOrder
    dateLastTrained?: SortOrderInput | SortOrder
    measurementUnit?: SortOrder
    _count?: ExerciseCountOrderByAggregateInput
    _max?: ExerciseMaxOrderByAggregateInput
    _min?: ExerciseMinOrderByAggregateInput
  }

  export type ExerciseScalarWhereWithAggregatesInput = {
    AND?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    OR?: ExerciseScalarWhereWithAggregatesInput[]
    NOT?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Exercise"> | string
    name?: StringWithAggregatesFilter<"Exercise"> | string
    currentPersonalBestId?: UuidNullableWithAggregatesFilter<"Exercise"> | string | null
    modality?: EnumTrainingModalityWithAggregatesFilter<"Exercise"> | $Enums.TrainingModality
    dateLastTrained?: DateTimeNullableWithAggregatesFilter<"Exercise"> | Date | string | null
    measurementUnit?: EnumMeasurementUnitWithAggregatesFilter<"Exercise"> | $Enums.MeasurementUnit
  }

  export type AttemptWhereInput = {
    AND?: AttemptWhereInput | AttemptWhereInput[]
    OR?: AttemptWhereInput[]
    NOT?: AttemptWhereInput | AttemptWhereInput[]
    id?: UuidFilter<"Attempt"> | string
    exerciseId?: UuidFilter<"Attempt"> | string
    numberOfReps?: IntNullableFilter<"Attempt"> | number | null
    timeInMinutes?: IntNullableFilter<"Attempt"> | number | null
    weightInKg?: IntFilter<"Attempt"> | number
    createdAt?: DateTimeFilter<"Attempt"> | Date | string
    updatedAt?: DateTimeFilter<"Attempt"> | Date | string
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
    personalBestAggregates?: PersonalBestAggregateListRelationFilter
  }

  export type AttemptOrderByWithRelationInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    numberOfReps?: SortOrderInput | SortOrder
    timeInMinutes?: SortOrderInput | SortOrder
    weightInKg?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    exercise?: ExerciseOrderByWithRelationInput
    personalBestAggregates?: PersonalBestAggregateOrderByRelationAggregateInput
  }

  export type AttemptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttemptWhereInput | AttemptWhereInput[]
    OR?: AttemptWhereInput[]
    NOT?: AttemptWhereInput | AttemptWhereInput[]
    exerciseId?: UuidFilter<"Attempt"> | string
    numberOfReps?: IntNullableFilter<"Attempt"> | number | null
    timeInMinutes?: IntNullableFilter<"Attempt"> | number | null
    weightInKg?: IntFilter<"Attempt"> | number
    createdAt?: DateTimeFilter<"Attempt"> | Date | string
    updatedAt?: DateTimeFilter<"Attempt"> | Date | string
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
    personalBestAggregates?: PersonalBestAggregateListRelationFilter
  }, "id">

  export type AttemptOrderByWithAggregationInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    numberOfReps?: SortOrderInput | SortOrder
    timeInMinutes?: SortOrderInput | SortOrder
    weightInKg?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AttemptCountOrderByAggregateInput
    _avg?: AttemptAvgOrderByAggregateInput
    _max?: AttemptMaxOrderByAggregateInput
    _min?: AttemptMinOrderByAggregateInput
    _sum?: AttemptSumOrderByAggregateInput
  }

  export type AttemptScalarWhereWithAggregatesInput = {
    AND?: AttemptScalarWhereWithAggregatesInput | AttemptScalarWhereWithAggregatesInput[]
    OR?: AttemptScalarWhereWithAggregatesInput[]
    NOT?: AttemptScalarWhereWithAggregatesInput | AttemptScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Attempt"> | string
    exerciseId?: UuidWithAggregatesFilter<"Attempt"> | string
    numberOfReps?: IntNullableWithAggregatesFilter<"Attempt"> | number | null
    timeInMinutes?: IntNullableWithAggregatesFilter<"Attempt"> | number | null
    weightInKg?: IntWithAggregatesFilter<"Attempt"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Attempt"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Attempt"> | Date | string
  }

  export type PersonalBestAggregateWhereInput = {
    AND?: PersonalBestAggregateWhereInput | PersonalBestAggregateWhereInput[]
    OR?: PersonalBestAggregateWhereInput[]
    NOT?: PersonalBestAggregateWhereInput | PersonalBestAggregateWhereInput[]
    id?: UuidFilter<"PersonalBestAggregate"> | string
    attemptId?: UuidFilter<"PersonalBestAggregate"> | string
    exerciseId?: UuidFilter<"PersonalBestAggregate"> | string
    exerciseName?: StringFilter<"PersonalBestAggregate"> | string
    measurementUnit?: EnumMeasurementUnitFilter<"PersonalBestAggregate"> | $Enums.MeasurementUnit
    numberOfReps?: IntNullableFilter<"PersonalBestAggregate"> | number | null
    timeInMinutes?: IntNullableFilter<"PersonalBestAggregate"> | number | null
    weightInKg?: IntFilter<"PersonalBestAggregate"> | number
    date?: DateTimeFilter<"PersonalBestAggregate"> | Date | string
    amountAboveLastPb?: IntFilter<"PersonalBestAggregate"> | number
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
    attempt?: XOR<AttemptScalarRelationFilter, AttemptWhereInput>
  }

  export type PersonalBestAggregateOrderByWithRelationInput = {
    id?: SortOrder
    attemptId?: SortOrder
    exerciseId?: SortOrder
    exerciseName?: SortOrder
    measurementUnit?: SortOrder
    numberOfReps?: SortOrderInput | SortOrder
    timeInMinutes?: SortOrderInput | SortOrder
    weightInKg?: SortOrder
    date?: SortOrder
    amountAboveLastPb?: SortOrder
    exercise?: ExerciseOrderByWithRelationInput
    attempt?: AttemptOrderByWithRelationInput
  }

  export type PersonalBestAggregateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PersonalBestAggregateWhereInput | PersonalBestAggregateWhereInput[]
    OR?: PersonalBestAggregateWhereInput[]
    NOT?: PersonalBestAggregateWhereInput | PersonalBestAggregateWhereInput[]
    attemptId?: UuidFilter<"PersonalBestAggregate"> | string
    exerciseId?: UuidFilter<"PersonalBestAggregate"> | string
    exerciseName?: StringFilter<"PersonalBestAggregate"> | string
    measurementUnit?: EnumMeasurementUnitFilter<"PersonalBestAggregate"> | $Enums.MeasurementUnit
    numberOfReps?: IntNullableFilter<"PersonalBestAggregate"> | number | null
    timeInMinutes?: IntNullableFilter<"PersonalBestAggregate"> | number | null
    weightInKg?: IntFilter<"PersonalBestAggregate"> | number
    date?: DateTimeFilter<"PersonalBestAggregate"> | Date | string
    amountAboveLastPb?: IntFilter<"PersonalBestAggregate"> | number
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
    attempt?: XOR<AttemptScalarRelationFilter, AttemptWhereInput>
  }, "id">

  export type PersonalBestAggregateOrderByWithAggregationInput = {
    id?: SortOrder
    attemptId?: SortOrder
    exerciseId?: SortOrder
    exerciseName?: SortOrder
    measurementUnit?: SortOrder
    numberOfReps?: SortOrderInput | SortOrder
    timeInMinutes?: SortOrderInput | SortOrder
    weightInKg?: SortOrder
    date?: SortOrder
    amountAboveLastPb?: SortOrder
    _count?: PersonalBestAggregateCountOrderByAggregateInput
    _avg?: PersonalBestAggregateAvgOrderByAggregateInput
    _max?: PersonalBestAggregateMaxOrderByAggregateInput
    _min?: PersonalBestAggregateMinOrderByAggregateInput
    _sum?: PersonalBestAggregateSumOrderByAggregateInput
  }

  export type PersonalBestAggregateScalarWhereWithAggregatesInput = {
    AND?: PersonalBestAggregateScalarWhereWithAggregatesInput | PersonalBestAggregateScalarWhereWithAggregatesInput[]
    OR?: PersonalBestAggregateScalarWhereWithAggregatesInput[]
    NOT?: PersonalBestAggregateScalarWhereWithAggregatesInput | PersonalBestAggregateScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"PersonalBestAggregate"> | string
    attemptId?: UuidWithAggregatesFilter<"PersonalBestAggregate"> | string
    exerciseId?: UuidWithAggregatesFilter<"PersonalBestAggregate"> | string
    exerciseName?: StringWithAggregatesFilter<"PersonalBestAggregate"> | string
    measurementUnit?: EnumMeasurementUnitWithAggregatesFilter<"PersonalBestAggregate"> | $Enums.MeasurementUnit
    numberOfReps?: IntNullableWithAggregatesFilter<"PersonalBestAggregate"> | number | null
    timeInMinutes?: IntNullableWithAggregatesFilter<"PersonalBestAggregate"> | number | null
    weightInKg?: IntWithAggregatesFilter<"PersonalBestAggregate"> | number
    date?: DateTimeWithAggregatesFilter<"PersonalBestAggregate"> | Date | string
    amountAboveLastPb?: IntWithAggregatesFilter<"PersonalBestAggregate"> | number
  }

  export type ExerciseCreateInput = {
    id?: string
    name: string
    currentPersonalBestId?: string | null
    modality: $Enums.TrainingModality
    dateLastTrained?: Date | string | null
    measurementUnit: $Enums.MeasurementUnit
    attempts?: AttemptCreateNestedManyWithoutExerciseInput
    personalBestAggregates?: PersonalBestAggregateCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateInput = {
    id?: string
    name: string
    currentPersonalBestId?: string | null
    modality: $Enums.TrainingModality
    dateLastTrained?: Date | string | null
    measurementUnit: $Enums.MeasurementUnit
    attempts?: AttemptUncheckedCreateNestedManyWithoutExerciseInput
    personalBestAggregates?: PersonalBestAggregateUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currentPersonalBestId?: NullableStringFieldUpdateOperationsInput | string | null
    modality?: EnumTrainingModalityFieldUpdateOperationsInput | $Enums.TrainingModality
    dateLastTrained?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    measurementUnit?: EnumMeasurementUnitFieldUpdateOperationsInput | $Enums.MeasurementUnit
    attempts?: AttemptUpdateManyWithoutExerciseNestedInput
    personalBestAggregates?: PersonalBestAggregateUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currentPersonalBestId?: NullableStringFieldUpdateOperationsInput | string | null
    modality?: EnumTrainingModalityFieldUpdateOperationsInput | $Enums.TrainingModality
    dateLastTrained?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    measurementUnit?: EnumMeasurementUnitFieldUpdateOperationsInput | $Enums.MeasurementUnit
    attempts?: AttemptUncheckedUpdateManyWithoutExerciseNestedInput
    personalBestAggregates?: PersonalBestAggregateUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseCreateManyInput = {
    id?: string
    name: string
    currentPersonalBestId?: string | null
    modality: $Enums.TrainingModality
    dateLastTrained?: Date | string | null
    measurementUnit: $Enums.MeasurementUnit
  }

  export type ExerciseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currentPersonalBestId?: NullableStringFieldUpdateOperationsInput | string | null
    modality?: EnumTrainingModalityFieldUpdateOperationsInput | $Enums.TrainingModality
    dateLastTrained?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    measurementUnit?: EnumMeasurementUnitFieldUpdateOperationsInput | $Enums.MeasurementUnit
  }

  export type ExerciseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currentPersonalBestId?: NullableStringFieldUpdateOperationsInput | string | null
    modality?: EnumTrainingModalityFieldUpdateOperationsInput | $Enums.TrainingModality
    dateLastTrained?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    measurementUnit?: EnumMeasurementUnitFieldUpdateOperationsInput | $Enums.MeasurementUnit
  }

  export type AttemptCreateInput = {
    id?: string
    numberOfReps?: number | null
    timeInMinutes?: number | null
    weightInKg?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    exercise: ExerciseCreateNestedOneWithoutAttemptsInput
    personalBestAggregates?: PersonalBestAggregateCreateNestedManyWithoutAttemptInput
  }

  export type AttemptUncheckedCreateInput = {
    id?: string
    exerciseId: string
    numberOfReps?: number | null
    timeInMinutes?: number | null
    weightInKg?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    personalBestAggregates?: PersonalBestAggregateUncheckedCreateNestedManyWithoutAttemptInput
  }

  export type AttemptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numberOfReps?: NullableIntFieldUpdateOperationsInput | number | null
    timeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    weightInKg?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercise?: ExerciseUpdateOneRequiredWithoutAttemptsNestedInput
    personalBestAggregates?: PersonalBestAggregateUpdateManyWithoutAttemptNestedInput
  }

  export type AttemptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    numberOfReps?: NullableIntFieldUpdateOperationsInput | number | null
    timeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    weightInKg?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personalBestAggregates?: PersonalBestAggregateUncheckedUpdateManyWithoutAttemptNestedInput
  }

  export type AttemptCreateManyInput = {
    id?: string
    exerciseId: string
    numberOfReps?: number | null
    timeInMinutes?: number | null
    weightInKg?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttemptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    numberOfReps?: NullableIntFieldUpdateOperationsInput | number | null
    timeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    weightInKg?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttemptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    numberOfReps?: NullableIntFieldUpdateOperationsInput | number | null
    timeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    weightInKg?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonalBestAggregateCreateInput = {
    id?: string
    exerciseName: string
    measurementUnit: $Enums.MeasurementUnit
    numberOfReps?: number | null
    timeInMinutes?: number | null
    weightInKg?: number
    date: Date | string
    amountAboveLastPb?: number
    exercise: ExerciseCreateNestedOneWithoutPersonalBestAggregatesInput
    attempt: AttemptCreateNestedOneWithoutPersonalBestAggregatesInput
  }

  export type PersonalBestAggregateUncheckedCreateInput = {
    id?: string
    attemptId: string
    exerciseId: string
    exerciseName: string
    measurementUnit: $Enums.MeasurementUnit
    numberOfReps?: number | null
    timeInMinutes?: number | null
    weightInKg?: number
    date: Date | string
    amountAboveLastPb?: number
  }

  export type PersonalBestAggregateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseName?: StringFieldUpdateOperationsInput | string
    measurementUnit?: EnumMeasurementUnitFieldUpdateOperationsInput | $Enums.MeasurementUnit
    numberOfReps?: NullableIntFieldUpdateOperationsInput | number | null
    timeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    weightInKg?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amountAboveLastPb?: IntFieldUpdateOperationsInput | number
    exercise?: ExerciseUpdateOneRequiredWithoutPersonalBestAggregatesNestedInput
    attempt?: AttemptUpdateOneRequiredWithoutPersonalBestAggregatesNestedInput
  }

  export type PersonalBestAggregateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    attemptId?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    exerciseName?: StringFieldUpdateOperationsInput | string
    measurementUnit?: EnumMeasurementUnitFieldUpdateOperationsInput | $Enums.MeasurementUnit
    numberOfReps?: NullableIntFieldUpdateOperationsInput | number | null
    timeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    weightInKg?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amountAboveLastPb?: IntFieldUpdateOperationsInput | number
  }

  export type PersonalBestAggregateCreateManyInput = {
    id?: string
    attemptId: string
    exerciseId: string
    exerciseName: string
    measurementUnit: $Enums.MeasurementUnit
    numberOfReps?: number | null
    timeInMinutes?: number | null
    weightInKg?: number
    date: Date | string
    amountAboveLastPb?: number
  }

  export type PersonalBestAggregateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseName?: StringFieldUpdateOperationsInput | string
    measurementUnit?: EnumMeasurementUnitFieldUpdateOperationsInput | $Enums.MeasurementUnit
    numberOfReps?: NullableIntFieldUpdateOperationsInput | number | null
    timeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    weightInKg?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amountAboveLastPb?: IntFieldUpdateOperationsInput | number
  }

  export type PersonalBestAggregateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    attemptId?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    exerciseName?: StringFieldUpdateOperationsInput | string
    measurementUnit?: EnumMeasurementUnitFieldUpdateOperationsInput | $Enums.MeasurementUnit
    numberOfReps?: NullableIntFieldUpdateOperationsInput | number | null
    timeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    weightInKg?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amountAboveLastPb?: IntFieldUpdateOperationsInput | number
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type EnumTrainingModalityFilter<$PrismaModel = never> = {
    equals?: $Enums.TrainingModality | EnumTrainingModalityFieldRefInput<$PrismaModel>
    in?: $Enums.TrainingModality[] | ListEnumTrainingModalityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrainingModality[] | ListEnumTrainingModalityFieldRefInput<$PrismaModel>
    not?: NestedEnumTrainingModalityFilter<$PrismaModel> | $Enums.TrainingModality
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumMeasurementUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.MeasurementUnit | EnumMeasurementUnitFieldRefInput<$PrismaModel>
    in?: $Enums.MeasurementUnit[] | ListEnumMeasurementUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.MeasurementUnit[] | ListEnumMeasurementUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumMeasurementUnitFilter<$PrismaModel> | $Enums.MeasurementUnit
  }

  export type AttemptListRelationFilter = {
    every?: AttemptWhereInput
    some?: AttemptWhereInput
    none?: AttemptWhereInput
  }

  export type PersonalBestAggregateListRelationFilter = {
    every?: PersonalBestAggregateWhereInput
    some?: PersonalBestAggregateWhereInput
    none?: PersonalBestAggregateWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AttemptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PersonalBestAggregateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    currentPersonalBestId?: SortOrder
    modality?: SortOrder
    dateLastTrained?: SortOrder
    measurementUnit?: SortOrder
  }

  export type ExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    currentPersonalBestId?: SortOrder
    modality?: SortOrder
    dateLastTrained?: SortOrder
    measurementUnit?: SortOrder
  }

  export type ExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    currentPersonalBestId?: SortOrder
    modality?: SortOrder
    dateLastTrained?: SortOrder
    measurementUnit?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumTrainingModalityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TrainingModality | EnumTrainingModalityFieldRefInput<$PrismaModel>
    in?: $Enums.TrainingModality[] | ListEnumTrainingModalityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrainingModality[] | ListEnumTrainingModalityFieldRefInput<$PrismaModel>
    not?: NestedEnumTrainingModalityWithAggregatesFilter<$PrismaModel> | $Enums.TrainingModality
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTrainingModalityFilter<$PrismaModel>
    _max?: NestedEnumTrainingModalityFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumMeasurementUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MeasurementUnit | EnumMeasurementUnitFieldRefInput<$PrismaModel>
    in?: $Enums.MeasurementUnit[] | ListEnumMeasurementUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.MeasurementUnit[] | ListEnumMeasurementUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumMeasurementUnitWithAggregatesFilter<$PrismaModel> | $Enums.MeasurementUnit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMeasurementUnitFilter<$PrismaModel>
    _max?: NestedEnumMeasurementUnitFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ExerciseScalarRelationFilter = {
    is?: ExerciseWhereInput
    isNot?: ExerciseWhereInput
  }

  export type AttemptCountOrderByAggregateInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    numberOfReps?: SortOrder
    timeInMinutes?: SortOrder
    weightInKg?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttemptAvgOrderByAggregateInput = {
    numberOfReps?: SortOrder
    timeInMinutes?: SortOrder
    weightInKg?: SortOrder
  }

  export type AttemptMaxOrderByAggregateInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    numberOfReps?: SortOrder
    timeInMinutes?: SortOrder
    weightInKg?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttemptMinOrderByAggregateInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    numberOfReps?: SortOrder
    timeInMinutes?: SortOrder
    weightInKg?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttemptSumOrderByAggregateInput = {
    numberOfReps?: SortOrder
    timeInMinutes?: SortOrder
    weightInKg?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AttemptScalarRelationFilter = {
    is?: AttemptWhereInput
    isNot?: AttemptWhereInput
  }

  export type PersonalBestAggregateCountOrderByAggregateInput = {
    id?: SortOrder
    attemptId?: SortOrder
    exerciseId?: SortOrder
    exerciseName?: SortOrder
    measurementUnit?: SortOrder
    numberOfReps?: SortOrder
    timeInMinutes?: SortOrder
    weightInKg?: SortOrder
    date?: SortOrder
    amountAboveLastPb?: SortOrder
  }

  export type PersonalBestAggregateAvgOrderByAggregateInput = {
    numberOfReps?: SortOrder
    timeInMinutes?: SortOrder
    weightInKg?: SortOrder
    amountAboveLastPb?: SortOrder
  }

  export type PersonalBestAggregateMaxOrderByAggregateInput = {
    id?: SortOrder
    attemptId?: SortOrder
    exerciseId?: SortOrder
    exerciseName?: SortOrder
    measurementUnit?: SortOrder
    numberOfReps?: SortOrder
    timeInMinutes?: SortOrder
    weightInKg?: SortOrder
    date?: SortOrder
    amountAboveLastPb?: SortOrder
  }

  export type PersonalBestAggregateMinOrderByAggregateInput = {
    id?: SortOrder
    attemptId?: SortOrder
    exerciseId?: SortOrder
    exerciseName?: SortOrder
    measurementUnit?: SortOrder
    numberOfReps?: SortOrder
    timeInMinutes?: SortOrder
    weightInKg?: SortOrder
    date?: SortOrder
    amountAboveLastPb?: SortOrder
  }

  export type PersonalBestAggregateSumOrderByAggregateInput = {
    numberOfReps?: SortOrder
    timeInMinutes?: SortOrder
    weightInKg?: SortOrder
    amountAboveLastPb?: SortOrder
  }

  export type AttemptCreateNestedManyWithoutExerciseInput = {
    create?: XOR<AttemptCreateWithoutExerciseInput, AttemptUncheckedCreateWithoutExerciseInput> | AttemptCreateWithoutExerciseInput[] | AttemptUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: AttemptCreateOrConnectWithoutExerciseInput | AttemptCreateOrConnectWithoutExerciseInput[]
    createMany?: AttemptCreateManyExerciseInputEnvelope
    connect?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
  }

  export type PersonalBestAggregateCreateNestedManyWithoutExerciseInput = {
    create?: XOR<PersonalBestAggregateCreateWithoutExerciseInput, PersonalBestAggregateUncheckedCreateWithoutExerciseInput> | PersonalBestAggregateCreateWithoutExerciseInput[] | PersonalBestAggregateUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: PersonalBestAggregateCreateOrConnectWithoutExerciseInput | PersonalBestAggregateCreateOrConnectWithoutExerciseInput[]
    createMany?: PersonalBestAggregateCreateManyExerciseInputEnvelope
    connect?: PersonalBestAggregateWhereUniqueInput | PersonalBestAggregateWhereUniqueInput[]
  }

  export type AttemptUncheckedCreateNestedManyWithoutExerciseInput = {
    create?: XOR<AttemptCreateWithoutExerciseInput, AttemptUncheckedCreateWithoutExerciseInput> | AttemptCreateWithoutExerciseInput[] | AttemptUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: AttemptCreateOrConnectWithoutExerciseInput | AttemptCreateOrConnectWithoutExerciseInput[]
    createMany?: AttemptCreateManyExerciseInputEnvelope
    connect?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
  }

  export type PersonalBestAggregateUncheckedCreateNestedManyWithoutExerciseInput = {
    create?: XOR<PersonalBestAggregateCreateWithoutExerciseInput, PersonalBestAggregateUncheckedCreateWithoutExerciseInput> | PersonalBestAggregateCreateWithoutExerciseInput[] | PersonalBestAggregateUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: PersonalBestAggregateCreateOrConnectWithoutExerciseInput | PersonalBestAggregateCreateOrConnectWithoutExerciseInput[]
    createMany?: PersonalBestAggregateCreateManyExerciseInputEnvelope
    connect?: PersonalBestAggregateWhereUniqueInput | PersonalBestAggregateWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumTrainingModalityFieldUpdateOperationsInput = {
    set?: $Enums.TrainingModality
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumMeasurementUnitFieldUpdateOperationsInput = {
    set?: $Enums.MeasurementUnit
  }

  export type AttemptUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<AttemptCreateWithoutExerciseInput, AttemptUncheckedCreateWithoutExerciseInput> | AttemptCreateWithoutExerciseInput[] | AttemptUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: AttemptCreateOrConnectWithoutExerciseInput | AttemptCreateOrConnectWithoutExerciseInput[]
    upsert?: AttemptUpsertWithWhereUniqueWithoutExerciseInput | AttemptUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: AttemptCreateManyExerciseInputEnvelope
    set?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    disconnect?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    delete?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    connect?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    update?: AttemptUpdateWithWhereUniqueWithoutExerciseInput | AttemptUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: AttemptUpdateManyWithWhereWithoutExerciseInput | AttemptUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: AttemptScalarWhereInput | AttemptScalarWhereInput[]
  }

  export type PersonalBestAggregateUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<PersonalBestAggregateCreateWithoutExerciseInput, PersonalBestAggregateUncheckedCreateWithoutExerciseInput> | PersonalBestAggregateCreateWithoutExerciseInput[] | PersonalBestAggregateUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: PersonalBestAggregateCreateOrConnectWithoutExerciseInput | PersonalBestAggregateCreateOrConnectWithoutExerciseInput[]
    upsert?: PersonalBestAggregateUpsertWithWhereUniqueWithoutExerciseInput | PersonalBestAggregateUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: PersonalBestAggregateCreateManyExerciseInputEnvelope
    set?: PersonalBestAggregateWhereUniqueInput | PersonalBestAggregateWhereUniqueInput[]
    disconnect?: PersonalBestAggregateWhereUniqueInput | PersonalBestAggregateWhereUniqueInput[]
    delete?: PersonalBestAggregateWhereUniqueInput | PersonalBestAggregateWhereUniqueInput[]
    connect?: PersonalBestAggregateWhereUniqueInput | PersonalBestAggregateWhereUniqueInput[]
    update?: PersonalBestAggregateUpdateWithWhereUniqueWithoutExerciseInput | PersonalBestAggregateUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: PersonalBestAggregateUpdateManyWithWhereWithoutExerciseInput | PersonalBestAggregateUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: PersonalBestAggregateScalarWhereInput | PersonalBestAggregateScalarWhereInput[]
  }

  export type AttemptUncheckedUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<AttemptCreateWithoutExerciseInput, AttemptUncheckedCreateWithoutExerciseInput> | AttemptCreateWithoutExerciseInput[] | AttemptUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: AttemptCreateOrConnectWithoutExerciseInput | AttemptCreateOrConnectWithoutExerciseInput[]
    upsert?: AttemptUpsertWithWhereUniqueWithoutExerciseInput | AttemptUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: AttemptCreateManyExerciseInputEnvelope
    set?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    disconnect?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    delete?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    connect?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    update?: AttemptUpdateWithWhereUniqueWithoutExerciseInput | AttemptUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: AttemptUpdateManyWithWhereWithoutExerciseInput | AttemptUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: AttemptScalarWhereInput | AttemptScalarWhereInput[]
  }

  export type PersonalBestAggregateUncheckedUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<PersonalBestAggregateCreateWithoutExerciseInput, PersonalBestAggregateUncheckedCreateWithoutExerciseInput> | PersonalBestAggregateCreateWithoutExerciseInput[] | PersonalBestAggregateUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: PersonalBestAggregateCreateOrConnectWithoutExerciseInput | PersonalBestAggregateCreateOrConnectWithoutExerciseInput[]
    upsert?: PersonalBestAggregateUpsertWithWhereUniqueWithoutExerciseInput | PersonalBestAggregateUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: PersonalBestAggregateCreateManyExerciseInputEnvelope
    set?: PersonalBestAggregateWhereUniqueInput | PersonalBestAggregateWhereUniqueInput[]
    disconnect?: PersonalBestAggregateWhereUniqueInput | PersonalBestAggregateWhereUniqueInput[]
    delete?: PersonalBestAggregateWhereUniqueInput | PersonalBestAggregateWhereUniqueInput[]
    connect?: PersonalBestAggregateWhereUniqueInput | PersonalBestAggregateWhereUniqueInput[]
    update?: PersonalBestAggregateUpdateWithWhereUniqueWithoutExerciseInput | PersonalBestAggregateUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: PersonalBestAggregateUpdateManyWithWhereWithoutExerciseInput | PersonalBestAggregateUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: PersonalBestAggregateScalarWhereInput | PersonalBestAggregateScalarWhereInput[]
  }

  export type ExerciseCreateNestedOneWithoutAttemptsInput = {
    create?: XOR<ExerciseCreateWithoutAttemptsInput, ExerciseUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutAttemptsInput
    connect?: ExerciseWhereUniqueInput
  }

  export type PersonalBestAggregateCreateNestedManyWithoutAttemptInput = {
    create?: XOR<PersonalBestAggregateCreateWithoutAttemptInput, PersonalBestAggregateUncheckedCreateWithoutAttemptInput> | PersonalBestAggregateCreateWithoutAttemptInput[] | PersonalBestAggregateUncheckedCreateWithoutAttemptInput[]
    connectOrCreate?: PersonalBestAggregateCreateOrConnectWithoutAttemptInput | PersonalBestAggregateCreateOrConnectWithoutAttemptInput[]
    createMany?: PersonalBestAggregateCreateManyAttemptInputEnvelope
    connect?: PersonalBestAggregateWhereUniqueInput | PersonalBestAggregateWhereUniqueInput[]
  }

  export type PersonalBestAggregateUncheckedCreateNestedManyWithoutAttemptInput = {
    create?: XOR<PersonalBestAggregateCreateWithoutAttemptInput, PersonalBestAggregateUncheckedCreateWithoutAttemptInput> | PersonalBestAggregateCreateWithoutAttemptInput[] | PersonalBestAggregateUncheckedCreateWithoutAttemptInput[]
    connectOrCreate?: PersonalBestAggregateCreateOrConnectWithoutAttemptInput | PersonalBestAggregateCreateOrConnectWithoutAttemptInput[]
    createMany?: PersonalBestAggregateCreateManyAttemptInputEnvelope
    connect?: PersonalBestAggregateWhereUniqueInput | PersonalBestAggregateWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ExerciseUpdateOneRequiredWithoutAttemptsNestedInput = {
    create?: XOR<ExerciseCreateWithoutAttemptsInput, ExerciseUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutAttemptsInput
    upsert?: ExerciseUpsertWithoutAttemptsInput
    connect?: ExerciseWhereUniqueInput
    update?: XOR<XOR<ExerciseUpdateToOneWithWhereWithoutAttemptsInput, ExerciseUpdateWithoutAttemptsInput>, ExerciseUncheckedUpdateWithoutAttemptsInput>
  }

  export type PersonalBestAggregateUpdateManyWithoutAttemptNestedInput = {
    create?: XOR<PersonalBestAggregateCreateWithoutAttemptInput, PersonalBestAggregateUncheckedCreateWithoutAttemptInput> | PersonalBestAggregateCreateWithoutAttemptInput[] | PersonalBestAggregateUncheckedCreateWithoutAttemptInput[]
    connectOrCreate?: PersonalBestAggregateCreateOrConnectWithoutAttemptInput | PersonalBestAggregateCreateOrConnectWithoutAttemptInput[]
    upsert?: PersonalBestAggregateUpsertWithWhereUniqueWithoutAttemptInput | PersonalBestAggregateUpsertWithWhereUniqueWithoutAttemptInput[]
    createMany?: PersonalBestAggregateCreateManyAttemptInputEnvelope
    set?: PersonalBestAggregateWhereUniqueInput | PersonalBestAggregateWhereUniqueInput[]
    disconnect?: PersonalBestAggregateWhereUniqueInput | PersonalBestAggregateWhereUniqueInput[]
    delete?: PersonalBestAggregateWhereUniqueInput | PersonalBestAggregateWhereUniqueInput[]
    connect?: PersonalBestAggregateWhereUniqueInput | PersonalBestAggregateWhereUniqueInput[]
    update?: PersonalBestAggregateUpdateWithWhereUniqueWithoutAttemptInput | PersonalBestAggregateUpdateWithWhereUniqueWithoutAttemptInput[]
    updateMany?: PersonalBestAggregateUpdateManyWithWhereWithoutAttemptInput | PersonalBestAggregateUpdateManyWithWhereWithoutAttemptInput[]
    deleteMany?: PersonalBestAggregateScalarWhereInput | PersonalBestAggregateScalarWhereInput[]
  }

  export type PersonalBestAggregateUncheckedUpdateManyWithoutAttemptNestedInput = {
    create?: XOR<PersonalBestAggregateCreateWithoutAttemptInput, PersonalBestAggregateUncheckedCreateWithoutAttemptInput> | PersonalBestAggregateCreateWithoutAttemptInput[] | PersonalBestAggregateUncheckedCreateWithoutAttemptInput[]
    connectOrCreate?: PersonalBestAggregateCreateOrConnectWithoutAttemptInput | PersonalBestAggregateCreateOrConnectWithoutAttemptInput[]
    upsert?: PersonalBestAggregateUpsertWithWhereUniqueWithoutAttemptInput | PersonalBestAggregateUpsertWithWhereUniqueWithoutAttemptInput[]
    createMany?: PersonalBestAggregateCreateManyAttemptInputEnvelope
    set?: PersonalBestAggregateWhereUniqueInput | PersonalBestAggregateWhereUniqueInput[]
    disconnect?: PersonalBestAggregateWhereUniqueInput | PersonalBestAggregateWhereUniqueInput[]
    delete?: PersonalBestAggregateWhereUniqueInput | PersonalBestAggregateWhereUniqueInput[]
    connect?: PersonalBestAggregateWhereUniqueInput | PersonalBestAggregateWhereUniqueInput[]
    update?: PersonalBestAggregateUpdateWithWhereUniqueWithoutAttemptInput | PersonalBestAggregateUpdateWithWhereUniqueWithoutAttemptInput[]
    updateMany?: PersonalBestAggregateUpdateManyWithWhereWithoutAttemptInput | PersonalBestAggregateUpdateManyWithWhereWithoutAttemptInput[]
    deleteMany?: PersonalBestAggregateScalarWhereInput | PersonalBestAggregateScalarWhereInput[]
  }

  export type ExerciseCreateNestedOneWithoutPersonalBestAggregatesInput = {
    create?: XOR<ExerciseCreateWithoutPersonalBestAggregatesInput, ExerciseUncheckedCreateWithoutPersonalBestAggregatesInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutPersonalBestAggregatesInput
    connect?: ExerciseWhereUniqueInput
  }

  export type AttemptCreateNestedOneWithoutPersonalBestAggregatesInput = {
    create?: XOR<AttemptCreateWithoutPersonalBestAggregatesInput, AttemptUncheckedCreateWithoutPersonalBestAggregatesInput>
    connectOrCreate?: AttemptCreateOrConnectWithoutPersonalBestAggregatesInput
    connect?: AttemptWhereUniqueInput
  }

  export type ExerciseUpdateOneRequiredWithoutPersonalBestAggregatesNestedInput = {
    create?: XOR<ExerciseCreateWithoutPersonalBestAggregatesInput, ExerciseUncheckedCreateWithoutPersonalBestAggregatesInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutPersonalBestAggregatesInput
    upsert?: ExerciseUpsertWithoutPersonalBestAggregatesInput
    connect?: ExerciseWhereUniqueInput
    update?: XOR<XOR<ExerciseUpdateToOneWithWhereWithoutPersonalBestAggregatesInput, ExerciseUpdateWithoutPersonalBestAggregatesInput>, ExerciseUncheckedUpdateWithoutPersonalBestAggregatesInput>
  }

  export type AttemptUpdateOneRequiredWithoutPersonalBestAggregatesNestedInput = {
    create?: XOR<AttemptCreateWithoutPersonalBestAggregatesInput, AttemptUncheckedCreateWithoutPersonalBestAggregatesInput>
    connectOrCreate?: AttemptCreateOrConnectWithoutPersonalBestAggregatesInput
    upsert?: AttemptUpsertWithoutPersonalBestAggregatesInput
    connect?: AttemptWhereUniqueInput
    update?: XOR<XOR<AttemptUpdateToOneWithWhereWithoutPersonalBestAggregatesInput, AttemptUpdateWithoutPersonalBestAggregatesInput>, AttemptUncheckedUpdateWithoutPersonalBestAggregatesInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumTrainingModalityFilter<$PrismaModel = never> = {
    equals?: $Enums.TrainingModality | EnumTrainingModalityFieldRefInput<$PrismaModel>
    in?: $Enums.TrainingModality[] | ListEnumTrainingModalityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrainingModality[] | ListEnumTrainingModalityFieldRefInput<$PrismaModel>
    not?: NestedEnumTrainingModalityFilter<$PrismaModel> | $Enums.TrainingModality
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumMeasurementUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.MeasurementUnit | EnumMeasurementUnitFieldRefInput<$PrismaModel>
    in?: $Enums.MeasurementUnit[] | ListEnumMeasurementUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.MeasurementUnit[] | ListEnumMeasurementUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumMeasurementUnitFilter<$PrismaModel> | $Enums.MeasurementUnit
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumTrainingModalityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TrainingModality | EnumTrainingModalityFieldRefInput<$PrismaModel>
    in?: $Enums.TrainingModality[] | ListEnumTrainingModalityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrainingModality[] | ListEnumTrainingModalityFieldRefInput<$PrismaModel>
    not?: NestedEnumTrainingModalityWithAggregatesFilter<$PrismaModel> | $Enums.TrainingModality
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTrainingModalityFilter<$PrismaModel>
    _max?: NestedEnumTrainingModalityFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumMeasurementUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MeasurementUnit | EnumMeasurementUnitFieldRefInput<$PrismaModel>
    in?: $Enums.MeasurementUnit[] | ListEnumMeasurementUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.MeasurementUnit[] | ListEnumMeasurementUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumMeasurementUnitWithAggregatesFilter<$PrismaModel> | $Enums.MeasurementUnit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMeasurementUnitFilter<$PrismaModel>
    _max?: NestedEnumMeasurementUnitFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AttemptCreateWithoutExerciseInput = {
    id?: string
    numberOfReps?: number | null
    timeInMinutes?: number | null
    weightInKg?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    personalBestAggregates?: PersonalBestAggregateCreateNestedManyWithoutAttemptInput
  }

  export type AttemptUncheckedCreateWithoutExerciseInput = {
    id?: string
    numberOfReps?: number | null
    timeInMinutes?: number | null
    weightInKg?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    personalBestAggregates?: PersonalBestAggregateUncheckedCreateNestedManyWithoutAttemptInput
  }

  export type AttemptCreateOrConnectWithoutExerciseInput = {
    where: AttemptWhereUniqueInput
    create: XOR<AttemptCreateWithoutExerciseInput, AttemptUncheckedCreateWithoutExerciseInput>
  }

  export type AttemptCreateManyExerciseInputEnvelope = {
    data: AttemptCreateManyExerciseInput | AttemptCreateManyExerciseInput[]
    skipDuplicates?: boolean
  }

  export type PersonalBestAggregateCreateWithoutExerciseInput = {
    id?: string
    exerciseName: string
    measurementUnit: $Enums.MeasurementUnit
    numberOfReps?: number | null
    timeInMinutes?: number | null
    weightInKg?: number
    date: Date | string
    amountAboveLastPb?: number
    attempt: AttemptCreateNestedOneWithoutPersonalBestAggregatesInput
  }

  export type PersonalBestAggregateUncheckedCreateWithoutExerciseInput = {
    id?: string
    attemptId: string
    exerciseName: string
    measurementUnit: $Enums.MeasurementUnit
    numberOfReps?: number | null
    timeInMinutes?: number | null
    weightInKg?: number
    date: Date | string
    amountAboveLastPb?: number
  }

  export type PersonalBestAggregateCreateOrConnectWithoutExerciseInput = {
    where: PersonalBestAggregateWhereUniqueInput
    create: XOR<PersonalBestAggregateCreateWithoutExerciseInput, PersonalBestAggregateUncheckedCreateWithoutExerciseInput>
  }

  export type PersonalBestAggregateCreateManyExerciseInputEnvelope = {
    data: PersonalBestAggregateCreateManyExerciseInput | PersonalBestAggregateCreateManyExerciseInput[]
    skipDuplicates?: boolean
  }

  export type AttemptUpsertWithWhereUniqueWithoutExerciseInput = {
    where: AttemptWhereUniqueInput
    update: XOR<AttemptUpdateWithoutExerciseInput, AttemptUncheckedUpdateWithoutExerciseInput>
    create: XOR<AttemptCreateWithoutExerciseInput, AttemptUncheckedCreateWithoutExerciseInput>
  }

  export type AttemptUpdateWithWhereUniqueWithoutExerciseInput = {
    where: AttemptWhereUniqueInput
    data: XOR<AttemptUpdateWithoutExerciseInput, AttemptUncheckedUpdateWithoutExerciseInput>
  }

  export type AttemptUpdateManyWithWhereWithoutExerciseInput = {
    where: AttemptScalarWhereInput
    data: XOR<AttemptUpdateManyMutationInput, AttemptUncheckedUpdateManyWithoutExerciseInput>
  }

  export type AttemptScalarWhereInput = {
    AND?: AttemptScalarWhereInput | AttemptScalarWhereInput[]
    OR?: AttemptScalarWhereInput[]
    NOT?: AttemptScalarWhereInput | AttemptScalarWhereInput[]
    id?: UuidFilter<"Attempt"> | string
    exerciseId?: UuidFilter<"Attempt"> | string
    numberOfReps?: IntNullableFilter<"Attempt"> | number | null
    timeInMinutes?: IntNullableFilter<"Attempt"> | number | null
    weightInKg?: IntFilter<"Attempt"> | number
    createdAt?: DateTimeFilter<"Attempt"> | Date | string
    updatedAt?: DateTimeFilter<"Attempt"> | Date | string
  }

  export type PersonalBestAggregateUpsertWithWhereUniqueWithoutExerciseInput = {
    where: PersonalBestAggregateWhereUniqueInput
    update: XOR<PersonalBestAggregateUpdateWithoutExerciseInput, PersonalBestAggregateUncheckedUpdateWithoutExerciseInput>
    create: XOR<PersonalBestAggregateCreateWithoutExerciseInput, PersonalBestAggregateUncheckedCreateWithoutExerciseInput>
  }

  export type PersonalBestAggregateUpdateWithWhereUniqueWithoutExerciseInput = {
    where: PersonalBestAggregateWhereUniqueInput
    data: XOR<PersonalBestAggregateUpdateWithoutExerciseInput, PersonalBestAggregateUncheckedUpdateWithoutExerciseInput>
  }

  export type PersonalBestAggregateUpdateManyWithWhereWithoutExerciseInput = {
    where: PersonalBestAggregateScalarWhereInput
    data: XOR<PersonalBestAggregateUpdateManyMutationInput, PersonalBestAggregateUncheckedUpdateManyWithoutExerciseInput>
  }

  export type PersonalBestAggregateScalarWhereInput = {
    AND?: PersonalBestAggregateScalarWhereInput | PersonalBestAggregateScalarWhereInput[]
    OR?: PersonalBestAggregateScalarWhereInput[]
    NOT?: PersonalBestAggregateScalarWhereInput | PersonalBestAggregateScalarWhereInput[]
    id?: UuidFilter<"PersonalBestAggregate"> | string
    attemptId?: UuidFilter<"PersonalBestAggregate"> | string
    exerciseId?: UuidFilter<"PersonalBestAggregate"> | string
    exerciseName?: StringFilter<"PersonalBestAggregate"> | string
    measurementUnit?: EnumMeasurementUnitFilter<"PersonalBestAggregate"> | $Enums.MeasurementUnit
    numberOfReps?: IntNullableFilter<"PersonalBestAggregate"> | number | null
    timeInMinutes?: IntNullableFilter<"PersonalBestAggregate"> | number | null
    weightInKg?: IntFilter<"PersonalBestAggregate"> | number
    date?: DateTimeFilter<"PersonalBestAggregate"> | Date | string
    amountAboveLastPb?: IntFilter<"PersonalBestAggregate"> | number
  }

  export type ExerciseCreateWithoutAttemptsInput = {
    id?: string
    name: string
    currentPersonalBestId?: string | null
    modality: $Enums.TrainingModality
    dateLastTrained?: Date | string | null
    measurementUnit: $Enums.MeasurementUnit
    personalBestAggregates?: PersonalBestAggregateCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateWithoutAttemptsInput = {
    id?: string
    name: string
    currentPersonalBestId?: string | null
    modality: $Enums.TrainingModality
    dateLastTrained?: Date | string | null
    measurementUnit: $Enums.MeasurementUnit
    personalBestAggregates?: PersonalBestAggregateUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseCreateOrConnectWithoutAttemptsInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutAttemptsInput, ExerciseUncheckedCreateWithoutAttemptsInput>
  }

  export type PersonalBestAggregateCreateWithoutAttemptInput = {
    id?: string
    exerciseName: string
    measurementUnit: $Enums.MeasurementUnit
    numberOfReps?: number | null
    timeInMinutes?: number | null
    weightInKg?: number
    date: Date | string
    amountAboveLastPb?: number
    exercise: ExerciseCreateNestedOneWithoutPersonalBestAggregatesInput
  }

  export type PersonalBestAggregateUncheckedCreateWithoutAttemptInput = {
    id?: string
    exerciseId: string
    exerciseName: string
    measurementUnit: $Enums.MeasurementUnit
    numberOfReps?: number | null
    timeInMinutes?: number | null
    weightInKg?: number
    date: Date | string
    amountAboveLastPb?: number
  }

  export type PersonalBestAggregateCreateOrConnectWithoutAttemptInput = {
    where: PersonalBestAggregateWhereUniqueInput
    create: XOR<PersonalBestAggregateCreateWithoutAttemptInput, PersonalBestAggregateUncheckedCreateWithoutAttemptInput>
  }

  export type PersonalBestAggregateCreateManyAttemptInputEnvelope = {
    data: PersonalBestAggregateCreateManyAttemptInput | PersonalBestAggregateCreateManyAttemptInput[]
    skipDuplicates?: boolean
  }

  export type ExerciseUpsertWithoutAttemptsInput = {
    update: XOR<ExerciseUpdateWithoutAttemptsInput, ExerciseUncheckedUpdateWithoutAttemptsInput>
    create: XOR<ExerciseCreateWithoutAttemptsInput, ExerciseUncheckedCreateWithoutAttemptsInput>
    where?: ExerciseWhereInput
  }

  export type ExerciseUpdateToOneWithWhereWithoutAttemptsInput = {
    where?: ExerciseWhereInput
    data: XOR<ExerciseUpdateWithoutAttemptsInput, ExerciseUncheckedUpdateWithoutAttemptsInput>
  }

  export type ExerciseUpdateWithoutAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currentPersonalBestId?: NullableStringFieldUpdateOperationsInput | string | null
    modality?: EnumTrainingModalityFieldUpdateOperationsInput | $Enums.TrainingModality
    dateLastTrained?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    measurementUnit?: EnumMeasurementUnitFieldUpdateOperationsInput | $Enums.MeasurementUnit
    personalBestAggregates?: PersonalBestAggregateUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateWithoutAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currentPersonalBestId?: NullableStringFieldUpdateOperationsInput | string | null
    modality?: EnumTrainingModalityFieldUpdateOperationsInput | $Enums.TrainingModality
    dateLastTrained?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    measurementUnit?: EnumMeasurementUnitFieldUpdateOperationsInput | $Enums.MeasurementUnit
    personalBestAggregates?: PersonalBestAggregateUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type PersonalBestAggregateUpsertWithWhereUniqueWithoutAttemptInput = {
    where: PersonalBestAggregateWhereUniqueInput
    update: XOR<PersonalBestAggregateUpdateWithoutAttemptInput, PersonalBestAggregateUncheckedUpdateWithoutAttemptInput>
    create: XOR<PersonalBestAggregateCreateWithoutAttemptInput, PersonalBestAggregateUncheckedCreateWithoutAttemptInput>
  }

  export type PersonalBestAggregateUpdateWithWhereUniqueWithoutAttemptInput = {
    where: PersonalBestAggregateWhereUniqueInput
    data: XOR<PersonalBestAggregateUpdateWithoutAttemptInput, PersonalBestAggregateUncheckedUpdateWithoutAttemptInput>
  }

  export type PersonalBestAggregateUpdateManyWithWhereWithoutAttemptInput = {
    where: PersonalBestAggregateScalarWhereInput
    data: XOR<PersonalBestAggregateUpdateManyMutationInput, PersonalBestAggregateUncheckedUpdateManyWithoutAttemptInput>
  }

  export type ExerciseCreateWithoutPersonalBestAggregatesInput = {
    id?: string
    name: string
    currentPersonalBestId?: string | null
    modality: $Enums.TrainingModality
    dateLastTrained?: Date | string | null
    measurementUnit: $Enums.MeasurementUnit
    attempts?: AttemptCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateWithoutPersonalBestAggregatesInput = {
    id?: string
    name: string
    currentPersonalBestId?: string | null
    modality: $Enums.TrainingModality
    dateLastTrained?: Date | string | null
    measurementUnit: $Enums.MeasurementUnit
    attempts?: AttemptUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseCreateOrConnectWithoutPersonalBestAggregatesInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutPersonalBestAggregatesInput, ExerciseUncheckedCreateWithoutPersonalBestAggregatesInput>
  }

  export type AttemptCreateWithoutPersonalBestAggregatesInput = {
    id?: string
    numberOfReps?: number | null
    timeInMinutes?: number | null
    weightInKg?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    exercise: ExerciseCreateNestedOneWithoutAttemptsInput
  }

  export type AttemptUncheckedCreateWithoutPersonalBestAggregatesInput = {
    id?: string
    exerciseId: string
    numberOfReps?: number | null
    timeInMinutes?: number | null
    weightInKg?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttemptCreateOrConnectWithoutPersonalBestAggregatesInput = {
    where: AttemptWhereUniqueInput
    create: XOR<AttemptCreateWithoutPersonalBestAggregatesInput, AttemptUncheckedCreateWithoutPersonalBestAggregatesInput>
  }

  export type ExerciseUpsertWithoutPersonalBestAggregatesInput = {
    update: XOR<ExerciseUpdateWithoutPersonalBestAggregatesInput, ExerciseUncheckedUpdateWithoutPersonalBestAggregatesInput>
    create: XOR<ExerciseCreateWithoutPersonalBestAggregatesInput, ExerciseUncheckedCreateWithoutPersonalBestAggregatesInput>
    where?: ExerciseWhereInput
  }

  export type ExerciseUpdateToOneWithWhereWithoutPersonalBestAggregatesInput = {
    where?: ExerciseWhereInput
    data: XOR<ExerciseUpdateWithoutPersonalBestAggregatesInput, ExerciseUncheckedUpdateWithoutPersonalBestAggregatesInput>
  }

  export type ExerciseUpdateWithoutPersonalBestAggregatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currentPersonalBestId?: NullableStringFieldUpdateOperationsInput | string | null
    modality?: EnumTrainingModalityFieldUpdateOperationsInput | $Enums.TrainingModality
    dateLastTrained?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    measurementUnit?: EnumMeasurementUnitFieldUpdateOperationsInput | $Enums.MeasurementUnit
    attempts?: AttemptUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateWithoutPersonalBestAggregatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currentPersonalBestId?: NullableStringFieldUpdateOperationsInput | string | null
    modality?: EnumTrainingModalityFieldUpdateOperationsInput | $Enums.TrainingModality
    dateLastTrained?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    measurementUnit?: EnumMeasurementUnitFieldUpdateOperationsInput | $Enums.MeasurementUnit
    attempts?: AttemptUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type AttemptUpsertWithoutPersonalBestAggregatesInput = {
    update: XOR<AttemptUpdateWithoutPersonalBestAggregatesInput, AttemptUncheckedUpdateWithoutPersonalBestAggregatesInput>
    create: XOR<AttemptCreateWithoutPersonalBestAggregatesInput, AttemptUncheckedCreateWithoutPersonalBestAggregatesInput>
    where?: AttemptWhereInput
  }

  export type AttemptUpdateToOneWithWhereWithoutPersonalBestAggregatesInput = {
    where?: AttemptWhereInput
    data: XOR<AttemptUpdateWithoutPersonalBestAggregatesInput, AttemptUncheckedUpdateWithoutPersonalBestAggregatesInput>
  }

  export type AttemptUpdateWithoutPersonalBestAggregatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    numberOfReps?: NullableIntFieldUpdateOperationsInput | number | null
    timeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    weightInKg?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercise?: ExerciseUpdateOneRequiredWithoutAttemptsNestedInput
  }

  export type AttemptUncheckedUpdateWithoutPersonalBestAggregatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    numberOfReps?: NullableIntFieldUpdateOperationsInput | number | null
    timeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    weightInKg?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttemptCreateManyExerciseInput = {
    id?: string
    numberOfReps?: number | null
    timeInMinutes?: number | null
    weightInKg?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonalBestAggregateCreateManyExerciseInput = {
    id?: string
    attemptId: string
    exerciseName: string
    measurementUnit: $Enums.MeasurementUnit
    numberOfReps?: number | null
    timeInMinutes?: number | null
    weightInKg?: number
    date: Date | string
    amountAboveLastPb?: number
  }

  export type AttemptUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    numberOfReps?: NullableIntFieldUpdateOperationsInput | number | null
    timeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    weightInKg?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personalBestAggregates?: PersonalBestAggregateUpdateManyWithoutAttemptNestedInput
  }

  export type AttemptUncheckedUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    numberOfReps?: NullableIntFieldUpdateOperationsInput | number | null
    timeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    weightInKg?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personalBestAggregates?: PersonalBestAggregateUncheckedUpdateManyWithoutAttemptNestedInput
  }

  export type AttemptUncheckedUpdateManyWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    numberOfReps?: NullableIntFieldUpdateOperationsInput | number | null
    timeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    weightInKg?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonalBestAggregateUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseName?: StringFieldUpdateOperationsInput | string
    measurementUnit?: EnumMeasurementUnitFieldUpdateOperationsInput | $Enums.MeasurementUnit
    numberOfReps?: NullableIntFieldUpdateOperationsInput | number | null
    timeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    weightInKg?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amountAboveLastPb?: IntFieldUpdateOperationsInput | number
    attempt?: AttemptUpdateOneRequiredWithoutPersonalBestAggregatesNestedInput
  }

  export type PersonalBestAggregateUncheckedUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    attemptId?: StringFieldUpdateOperationsInput | string
    exerciseName?: StringFieldUpdateOperationsInput | string
    measurementUnit?: EnumMeasurementUnitFieldUpdateOperationsInput | $Enums.MeasurementUnit
    numberOfReps?: NullableIntFieldUpdateOperationsInput | number | null
    timeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    weightInKg?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amountAboveLastPb?: IntFieldUpdateOperationsInput | number
  }

  export type PersonalBestAggregateUncheckedUpdateManyWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    attemptId?: StringFieldUpdateOperationsInput | string
    exerciseName?: StringFieldUpdateOperationsInput | string
    measurementUnit?: EnumMeasurementUnitFieldUpdateOperationsInput | $Enums.MeasurementUnit
    numberOfReps?: NullableIntFieldUpdateOperationsInput | number | null
    timeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    weightInKg?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amountAboveLastPb?: IntFieldUpdateOperationsInput | number
  }

  export type PersonalBestAggregateCreateManyAttemptInput = {
    id?: string
    exerciseId: string
    exerciseName: string
    measurementUnit: $Enums.MeasurementUnit
    numberOfReps?: number | null
    timeInMinutes?: number | null
    weightInKg?: number
    date: Date | string
    amountAboveLastPb?: number
  }

  export type PersonalBestAggregateUpdateWithoutAttemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseName?: StringFieldUpdateOperationsInput | string
    measurementUnit?: EnumMeasurementUnitFieldUpdateOperationsInput | $Enums.MeasurementUnit
    numberOfReps?: NullableIntFieldUpdateOperationsInput | number | null
    timeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    weightInKg?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amountAboveLastPb?: IntFieldUpdateOperationsInput | number
    exercise?: ExerciseUpdateOneRequiredWithoutPersonalBestAggregatesNestedInput
  }

  export type PersonalBestAggregateUncheckedUpdateWithoutAttemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    exerciseName?: StringFieldUpdateOperationsInput | string
    measurementUnit?: EnumMeasurementUnitFieldUpdateOperationsInput | $Enums.MeasurementUnit
    numberOfReps?: NullableIntFieldUpdateOperationsInput | number | null
    timeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    weightInKg?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amountAboveLastPb?: IntFieldUpdateOperationsInput | number
  }

  export type PersonalBestAggregateUncheckedUpdateManyWithoutAttemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    exerciseName?: StringFieldUpdateOperationsInput | string
    measurementUnit?: EnumMeasurementUnitFieldUpdateOperationsInput | $Enums.MeasurementUnit
    numberOfReps?: NullableIntFieldUpdateOperationsInput | number | null
    timeInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    weightInKg?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amountAboveLastPb?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}