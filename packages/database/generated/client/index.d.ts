
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model YieldOpportunity
 * 
 */
export type YieldOpportunity = $Result.DefaultSelection<Prisma.$YieldOpportunityPayload>
/**
 * Model PortfolioPosition
 * 
 */
export type PortfolioPosition = $Result.DefaultSelection<Prisma.$PortfolioPositionPayload>
/**
 * Model PortfolioRebalance
 * 
 */
export type PortfolioRebalance = $Result.DefaultSelection<Prisma.$PortfolioRebalancePayload>
/**
 * Model PortfolioTransaction
 * 
 */
export type PortfolioTransaction = $Result.DefaultSelection<Prisma.$PortfolioTransactionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PortfolioDirection: {
  ENTER: 'ENTER',
  EXIT: 'EXIT',
  CORRECTION: 'CORRECTION'
};

export type PortfolioDirection = (typeof PortfolioDirection)[keyof typeof PortfolioDirection]

}

export type PortfolioDirection = $Enums.PortfolioDirection

export const PortfolioDirection: typeof $Enums.PortfolioDirection

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more YieldOpportunities
 * const yieldOpportunities = await prisma.yieldOpportunity.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more YieldOpportunities
   * const yieldOpportunities = await prisma.yieldOpportunity.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.yieldOpportunity`: Exposes CRUD operations for the **YieldOpportunity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more YieldOpportunities
    * const yieldOpportunities = await prisma.yieldOpportunity.findMany()
    * ```
    */
  get yieldOpportunity(): Prisma.YieldOpportunityDelegate<ExtArgs>;

  /**
   * `prisma.portfolioPosition`: Exposes CRUD operations for the **PortfolioPosition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PortfolioPositions
    * const portfolioPositions = await prisma.portfolioPosition.findMany()
    * ```
    */
  get portfolioPosition(): Prisma.PortfolioPositionDelegate<ExtArgs>;

  /**
   * `prisma.portfolioRebalance`: Exposes CRUD operations for the **PortfolioRebalance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PortfolioRebalances
    * const portfolioRebalances = await prisma.portfolioRebalance.findMany()
    * ```
    */
  get portfolioRebalance(): Prisma.PortfolioRebalanceDelegate<ExtArgs>;

  /**
   * `prisma.portfolioTransaction`: Exposes CRUD operations for the **PortfolioTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PortfolioTransactions
    * const portfolioTransactions = await prisma.portfolioTransaction.findMany()
    * ```
    */
  get portfolioTransaction(): Prisma.PortfolioTransactionDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    YieldOpportunity: 'YieldOpportunity',
    PortfolioPosition: 'PortfolioPosition',
    PortfolioRebalance: 'PortfolioRebalance',
    PortfolioTransaction: 'PortfolioTransaction'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "yieldOpportunity" | "portfolioPosition" | "portfolioRebalance" | "portfolioTransaction"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      YieldOpportunity: {
        payload: Prisma.$YieldOpportunityPayload<ExtArgs>
        fields: Prisma.YieldOpportunityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.YieldOpportunityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YieldOpportunityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.YieldOpportunityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YieldOpportunityPayload>
          }
          findFirst: {
            args: Prisma.YieldOpportunityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YieldOpportunityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.YieldOpportunityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YieldOpportunityPayload>
          }
          findMany: {
            args: Prisma.YieldOpportunityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YieldOpportunityPayload>[]
          }
          create: {
            args: Prisma.YieldOpportunityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YieldOpportunityPayload>
          }
          createMany: {
            args: Prisma.YieldOpportunityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.YieldOpportunityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YieldOpportunityPayload>[]
          }
          delete: {
            args: Prisma.YieldOpportunityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YieldOpportunityPayload>
          }
          update: {
            args: Prisma.YieldOpportunityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YieldOpportunityPayload>
          }
          deleteMany: {
            args: Prisma.YieldOpportunityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.YieldOpportunityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.YieldOpportunityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YieldOpportunityPayload>
          }
          aggregate: {
            args: Prisma.YieldOpportunityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateYieldOpportunity>
          }
          groupBy: {
            args: Prisma.YieldOpportunityGroupByArgs<ExtArgs>
            result: $Utils.Optional<YieldOpportunityGroupByOutputType>[]
          }
          count: {
            args: Prisma.YieldOpportunityCountArgs<ExtArgs>
            result: $Utils.Optional<YieldOpportunityCountAggregateOutputType> | number
          }
        }
      }
      PortfolioPosition: {
        payload: Prisma.$PortfolioPositionPayload<ExtArgs>
        fields: Prisma.PortfolioPositionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PortfolioPositionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPositionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PortfolioPositionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPositionPayload>
          }
          findFirst: {
            args: Prisma.PortfolioPositionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPositionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PortfolioPositionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPositionPayload>
          }
          findMany: {
            args: Prisma.PortfolioPositionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPositionPayload>[]
          }
          create: {
            args: Prisma.PortfolioPositionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPositionPayload>
          }
          createMany: {
            args: Prisma.PortfolioPositionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PortfolioPositionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPositionPayload>[]
          }
          delete: {
            args: Prisma.PortfolioPositionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPositionPayload>
          }
          update: {
            args: Prisma.PortfolioPositionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPositionPayload>
          }
          deleteMany: {
            args: Prisma.PortfolioPositionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PortfolioPositionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PortfolioPositionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPositionPayload>
          }
          aggregate: {
            args: Prisma.PortfolioPositionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePortfolioPosition>
          }
          groupBy: {
            args: Prisma.PortfolioPositionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PortfolioPositionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PortfolioPositionCountArgs<ExtArgs>
            result: $Utils.Optional<PortfolioPositionCountAggregateOutputType> | number
          }
        }
      }
      PortfolioRebalance: {
        payload: Prisma.$PortfolioRebalancePayload<ExtArgs>
        fields: Prisma.PortfolioRebalanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PortfolioRebalanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioRebalancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PortfolioRebalanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioRebalancePayload>
          }
          findFirst: {
            args: Prisma.PortfolioRebalanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioRebalancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PortfolioRebalanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioRebalancePayload>
          }
          findMany: {
            args: Prisma.PortfolioRebalanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioRebalancePayload>[]
          }
          create: {
            args: Prisma.PortfolioRebalanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioRebalancePayload>
          }
          createMany: {
            args: Prisma.PortfolioRebalanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PortfolioRebalanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioRebalancePayload>[]
          }
          delete: {
            args: Prisma.PortfolioRebalanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioRebalancePayload>
          }
          update: {
            args: Prisma.PortfolioRebalanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioRebalancePayload>
          }
          deleteMany: {
            args: Prisma.PortfolioRebalanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PortfolioRebalanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PortfolioRebalanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioRebalancePayload>
          }
          aggregate: {
            args: Prisma.PortfolioRebalanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePortfolioRebalance>
          }
          groupBy: {
            args: Prisma.PortfolioRebalanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PortfolioRebalanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.PortfolioRebalanceCountArgs<ExtArgs>
            result: $Utils.Optional<PortfolioRebalanceCountAggregateOutputType> | number
          }
        }
      }
      PortfolioTransaction: {
        payload: Prisma.$PortfolioTransactionPayload<ExtArgs>
        fields: Prisma.PortfolioTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PortfolioTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PortfolioTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioTransactionPayload>
          }
          findFirst: {
            args: Prisma.PortfolioTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PortfolioTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioTransactionPayload>
          }
          findMany: {
            args: Prisma.PortfolioTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioTransactionPayload>[]
          }
          create: {
            args: Prisma.PortfolioTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioTransactionPayload>
          }
          createMany: {
            args: Prisma.PortfolioTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PortfolioTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioTransactionPayload>[]
          }
          delete: {
            args: Prisma.PortfolioTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioTransactionPayload>
          }
          update: {
            args: Prisma.PortfolioTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioTransactionPayload>
          }
          deleteMany: {
            args: Prisma.PortfolioTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PortfolioTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PortfolioTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioTransactionPayload>
          }
          aggregate: {
            args: Prisma.PortfolioTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePortfolioTransaction>
          }
          groupBy: {
            args: Prisma.PortfolioTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PortfolioTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PortfolioTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<PortfolioTransactionCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Models
   */

  /**
   * Model YieldOpportunity
   */

  export type AggregateYieldOpportunity = {
    _count: YieldOpportunityCountAggregateOutputType | null
    _avg: YieldOpportunityAvgAggregateOutputType | null
    _sum: YieldOpportunitySumAggregateOutputType | null
    _min: YieldOpportunityMinAggregateOutputType | null
    _max: YieldOpportunityMaxAggregateOutputType | null
  }

  export type YieldOpportunityAvgAggregateOutputType = {
    apy: number | null
    tvl: number | null
    cooldownDays: number | null
    warmupDays: number | null
    withdrawDays: number | null
  }

  export type YieldOpportunitySumAggregateOutputType = {
    apy: number | null
    tvl: number | null
    cooldownDays: number | null
    warmupDays: number | null
    withdrawDays: number | null
  }

  export type YieldOpportunityMinAggregateOutputType = {
    id: string | null
    name: string | null
    content: string | null
    apy: number | null
    type: string | null
    network: string | null
    tokenSymbol: string | null
    tokenAddress: string | null
    providerId: string | null
    providerName: string | null
    protocol: string | null
    asset: string | null
    tvl: number | null
    cooldownDays: number | null
    warmupDays: number | null
    withdrawDays: number | null
    canEnter: boolean | null
    canExit: boolean | null
    createdAt: Date | null
    isAvailable: boolean | null
    rewardType: string | null
    updatedAt: Date | null
  }

  export type YieldOpportunityMaxAggregateOutputType = {
    id: string | null
    name: string | null
    content: string | null
    apy: number | null
    type: string | null
    network: string | null
    tokenSymbol: string | null
    tokenAddress: string | null
    providerId: string | null
    providerName: string | null
    protocol: string | null
    asset: string | null
    tvl: number | null
    cooldownDays: number | null
    warmupDays: number | null
    withdrawDays: number | null
    canEnter: boolean | null
    canExit: boolean | null
    createdAt: Date | null
    isAvailable: boolean | null
    rewardType: string | null
    updatedAt: Date | null
  }

  export type YieldOpportunityCountAggregateOutputType = {
    id: number
    name: number
    content: number
    apy: number
    type: number
    network: number
    tokenSymbol: number
    tokenAddress: number
    providerId: number
    providerName: number
    protocol: number
    asset: number
    tvl: number
    cooldownDays: number
    warmupDays: number
    withdrawDays: number
    canEnter: number
    canExit: number
    createdAt: number
    isAvailable: number
    rewardType: number
    updatedAt: number
    _all: number
  }


  export type YieldOpportunityAvgAggregateInputType = {
    apy?: true
    tvl?: true
    cooldownDays?: true
    warmupDays?: true
    withdrawDays?: true
  }

  export type YieldOpportunitySumAggregateInputType = {
    apy?: true
    tvl?: true
    cooldownDays?: true
    warmupDays?: true
    withdrawDays?: true
  }

  export type YieldOpportunityMinAggregateInputType = {
    id?: true
    name?: true
    content?: true
    apy?: true
    type?: true
    network?: true
    tokenSymbol?: true
    tokenAddress?: true
    providerId?: true
    providerName?: true
    protocol?: true
    asset?: true
    tvl?: true
    cooldownDays?: true
    warmupDays?: true
    withdrawDays?: true
    canEnter?: true
    canExit?: true
    createdAt?: true
    isAvailable?: true
    rewardType?: true
    updatedAt?: true
  }

  export type YieldOpportunityMaxAggregateInputType = {
    id?: true
    name?: true
    content?: true
    apy?: true
    type?: true
    network?: true
    tokenSymbol?: true
    tokenAddress?: true
    providerId?: true
    providerName?: true
    protocol?: true
    asset?: true
    tvl?: true
    cooldownDays?: true
    warmupDays?: true
    withdrawDays?: true
    canEnter?: true
    canExit?: true
    createdAt?: true
    isAvailable?: true
    rewardType?: true
    updatedAt?: true
  }

  export type YieldOpportunityCountAggregateInputType = {
    id?: true
    name?: true
    content?: true
    apy?: true
    type?: true
    network?: true
    tokenSymbol?: true
    tokenAddress?: true
    providerId?: true
    providerName?: true
    protocol?: true
    asset?: true
    tvl?: true
    cooldownDays?: true
    warmupDays?: true
    withdrawDays?: true
    canEnter?: true
    canExit?: true
    createdAt?: true
    isAvailable?: true
    rewardType?: true
    updatedAt?: true
    _all?: true
  }

  export type YieldOpportunityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which YieldOpportunity to aggregate.
     */
    where?: YieldOpportunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YieldOpportunities to fetch.
     */
    orderBy?: YieldOpportunityOrderByWithRelationInput | YieldOpportunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: YieldOpportunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YieldOpportunities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YieldOpportunities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned YieldOpportunities
    **/
    _count?: true | YieldOpportunityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: YieldOpportunityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: YieldOpportunitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: YieldOpportunityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: YieldOpportunityMaxAggregateInputType
  }

  export type GetYieldOpportunityAggregateType<T extends YieldOpportunityAggregateArgs> = {
        [P in keyof T & keyof AggregateYieldOpportunity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateYieldOpportunity[P]>
      : GetScalarType<T[P], AggregateYieldOpportunity[P]>
  }




  export type YieldOpportunityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: YieldOpportunityWhereInput
    orderBy?: YieldOpportunityOrderByWithAggregationInput | YieldOpportunityOrderByWithAggregationInput[]
    by: YieldOpportunityScalarFieldEnum[] | YieldOpportunityScalarFieldEnum
    having?: YieldOpportunityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: YieldOpportunityCountAggregateInputType | true
    _avg?: YieldOpportunityAvgAggregateInputType
    _sum?: YieldOpportunitySumAggregateInputType
    _min?: YieldOpportunityMinAggregateInputType
    _max?: YieldOpportunityMaxAggregateInputType
  }

  export type YieldOpportunityGroupByOutputType = {
    id: string
    name: string
    content: string | null
    apy: number
    type: string
    network: string
    tokenSymbol: string
    tokenAddress: string | null
    providerId: string
    providerName: string
    protocol: string
    asset: string
    tvl: number
    cooldownDays: number | null
    warmupDays: number | null
    withdrawDays: number | null
    canEnter: boolean
    canExit: boolean
    createdAt: Date
    isAvailable: boolean
    rewardType: string
    updatedAt: Date
    _count: YieldOpportunityCountAggregateOutputType | null
    _avg: YieldOpportunityAvgAggregateOutputType | null
    _sum: YieldOpportunitySumAggregateOutputType | null
    _min: YieldOpportunityMinAggregateOutputType | null
    _max: YieldOpportunityMaxAggregateOutputType | null
  }

  type GetYieldOpportunityGroupByPayload<T extends YieldOpportunityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<YieldOpportunityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof YieldOpportunityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], YieldOpportunityGroupByOutputType[P]>
            : GetScalarType<T[P], YieldOpportunityGroupByOutputType[P]>
        }
      >
    >


  export type YieldOpportunitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    content?: boolean
    apy?: boolean
    type?: boolean
    network?: boolean
    tokenSymbol?: boolean
    tokenAddress?: boolean
    providerId?: boolean
    providerName?: boolean
    protocol?: boolean
    asset?: boolean
    tvl?: boolean
    cooldownDays?: boolean
    warmupDays?: boolean
    withdrawDays?: boolean
    canEnter?: boolean
    canExit?: boolean
    createdAt?: boolean
    isAvailable?: boolean
    rewardType?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["yieldOpportunity"]>

  export type YieldOpportunitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    content?: boolean
    apy?: boolean
    type?: boolean
    network?: boolean
    tokenSymbol?: boolean
    tokenAddress?: boolean
    providerId?: boolean
    providerName?: boolean
    protocol?: boolean
    asset?: boolean
    tvl?: boolean
    cooldownDays?: boolean
    warmupDays?: boolean
    withdrawDays?: boolean
    canEnter?: boolean
    canExit?: boolean
    createdAt?: boolean
    isAvailable?: boolean
    rewardType?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["yieldOpportunity"]>

  export type YieldOpportunitySelectScalar = {
    id?: boolean
    name?: boolean
    content?: boolean
    apy?: boolean
    type?: boolean
    network?: boolean
    tokenSymbol?: boolean
    tokenAddress?: boolean
    providerId?: boolean
    providerName?: boolean
    protocol?: boolean
    asset?: boolean
    tvl?: boolean
    cooldownDays?: boolean
    warmupDays?: boolean
    withdrawDays?: boolean
    canEnter?: boolean
    canExit?: boolean
    createdAt?: boolean
    isAvailable?: boolean
    rewardType?: boolean
    updatedAt?: boolean
  }


  export type $YieldOpportunityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "YieldOpportunity"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      content: string | null
      apy: number
      type: string
      network: string
      tokenSymbol: string
      tokenAddress: string | null
      providerId: string
      providerName: string
      protocol: string
      asset: string
      tvl: number
      cooldownDays: number | null
      warmupDays: number | null
      withdrawDays: number | null
      canEnter: boolean
      canExit: boolean
      createdAt: Date
      isAvailable: boolean
      rewardType: string
      updatedAt: Date
    }, ExtArgs["result"]["yieldOpportunity"]>
    composites: {}
  }

  type YieldOpportunityGetPayload<S extends boolean | null | undefined | YieldOpportunityDefaultArgs> = $Result.GetResult<Prisma.$YieldOpportunityPayload, S>

  type YieldOpportunityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<YieldOpportunityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: YieldOpportunityCountAggregateInputType | true
    }

  export interface YieldOpportunityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['YieldOpportunity'], meta: { name: 'YieldOpportunity' } }
    /**
     * Find zero or one YieldOpportunity that matches the filter.
     * @param {YieldOpportunityFindUniqueArgs} args - Arguments to find a YieldOpportunity
     * @example
     * // Get one YieldOpportunity
     * const yieldOpportunity = await prisma.yieldOpportunity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends YieldOpportunityFindUniqueArgs>(args: SelectSubset<T, YieldOpportunityFindUniqueArgs<ExtArgs>>): Prisma__YieldOpportunityClient<$Result.GetResult<Prisma.$YieldOpportunityPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one YieldOpportunity that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {YieldOpportunityFindUniqueOrThrowArgs} args - Arguments to find a YieldOpportunity
     * @example
     * // Get one YieldOpportunity
     * const yieldOpportunity = await prisma.yieldOpportunity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends YieldOpportunityFindUniqueOrThrowArgs>(args: SelectSubset<T, YieldOpportunityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__YieldOpportunityClient<$Result.GetResult<Prisma.$YieldOpportunityPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first YieldOpportunity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YieldOpportunityFindFirstArgs} args - Arguments to find a YieldOpportunity
     * @example
     * // Get one YieldOpportunity
     * const yieldOpportunity = await prisma.yieldOpportunity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends YieldOpportunityFindFirstArgs>(args?: SelectSubset<T, YieldOpportunityFindFirstArgs<ExtArgs>>): Prisma__YieldOpportunityClient<$Result.GetResult<Prisma.$YieldOpportunityPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first YieldOpportunity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YieldOpportunityFindFirstOrThrowArgs} args - Arguments to find a YieldOpportunity
     * @example
     * // Get one YieldOpportunity
     * const yieldOpportunity = await prisma.yieldOpportunity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends YieldOpportunityFindFirstOrThrowArgs>(args?: SelectSubset<T, YieldOpportunityFindFirstOrThrowArgs<ExtArgs>>): Prisma__YieldOpportunityClient<$Result.GetResult<Prisma.$YieldOpportunityPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more YieldOpportunities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YieldOpportunityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all YieldOpportunities
     * const yieldOpportunities = await prisma.yieldOpportunity.findMany()
     * 
     * // Get first 10 YieldOpportunities
     * const yieldOpportunities = await prisma.yieldOpportunity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const yieldOpportunityWithIdOnly = await prisma.yieldOpportunity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends YieldOpportunityFindManyArgs>(args?: SelectSubset<T, YieldOpportunityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YieldOpportunityPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a YieldOpportunity.
     * @param {YieldOpportunityCreateArgs} args - Arguments to create a YieldOpportunity.
     * @example
     * // Create one YieldOpportunity
     * const YieldOpportunity = await prisma.yieldOpportunity.create({
     *   data: {
     *     // ... data to create a YieldOpportunity
     *   }
     * })
     * 
     */
    create<T extends YieldOpportunityCreateArgs>(args: SelectSubset<T, YieldOpportunityCreateArgs<ExtArgs>>): Prisma__YieldOpportunityClient<$Result.GetResult<Prisma.$YieldOpportunityPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many YieldOpportunities.
     * @param {YieldOpportunityCreateManyArgs} args - Arguments to create many YieldOpportunities.
     * @example
     * // Create many YieldOpportunities
     * const yieldOpportunity = await prisma.yieldOpportunity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends YieldOpportunityCreateManyArgs>(args?: SelectSubset<T, YieldOpportunityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many YieldOpportunities and returns the data saved in the database.
     * @param {YieldOpportunityCreateManyAndReturnArgs} args - Arguments to create many YieldOpportunities.
     * @example
     * // Create many YieldOpportunities
     * const yieldOpportunity = await prisma.yieldOpportunity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many YieldOpportunities and only return the `id`
     * const yieldOpportunityWithIdOnly = await prisma.yieldOpportunity.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends YieldOpportunityCreateManyAndReturnArgs>(args?: SelectSubset<T, YieldOpportunityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YieldOpportunityPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a YieldOpportunity.
     * @param {YieldOpportunityDeleteArgs} args - Arguments to delete one YieldOpportunity.
     * @example
     * // Delete one YieldOpportunity
     * const YieldOpportunity = await prisma.yieldOpportunity.delete({
     *   where: {
     *     // ... filter to delete one YieldOpportunity
     *   }
     * })
     * 
     */
    delete<T extends YieldOpportunityDeleteArgs>(args: SelectSubset<T, YieldOpportunityDeleteArgs<ExtArgs>>): Prisma__YieldOpportunityClient<$Result.GetResult<Prisma.$YieldOpportunityPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one YieldOpportunity.
     * @param {YieldOpportunityUpdateArgs} args - Arguments to update one YieldOpportunity.
     * @example
     * // Update one YieldOpportunity
     * const yieldOpportunity = await prisma.yieldOpportunity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends YieldOpportunityUpdateArgs>(args: SelectSubset<T, YieldOpportunityUpdateArgs<ExtArgs>>): Prisma__YieldOpportunityClient<$Result.GetResult<Prisma.$YieldOpportunityPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more YieldOpportunities.
     * @param {YieldOpportunityDeleteManyArgs} args - Arguments to filter YieldOpportunities to delete.
     * @example
     * // Delete a few YieldOpportunities
     * const { count } = await prisma.yieldOpportunity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends YieldOpportunityDeleteManyArgs>(args?: SelectSubset<T, YieldOpportunityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more YieldOpportunities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YieldOpportunityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many YieldOpportunities
     * const yieldOpportunity = await prisma.yieldOpportunity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends YieldOpportunityUpdateManyArgs>(args: SelectSubset<T, YieldOpportunityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one YieldOpportunity.
     * @param {YieldOpportunityUpsertArgs} args - Arguments to update or create a YieldOpportunity.
     * @example
     * // Update or create a YieldOpportunity
     * const yieldOpportunity = await prisma.yieldOpportunity.upsert({
     *   create: {
     *     // ... data to create a YieldOpportunity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the YieldOpportunity we want to update
     *   }
     * })
     */
    upsert<T extends YieldOpportunityUpsertArgs>(args: SelectSubset<T, YieldOpportunityUpsertArgs<ExtArgs>>): Prisma__YieldOpportunityClient<$Result.GetResult<Prisma.$YieldOpportunityPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of YieldOpportunities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YieldOpportunityCountArgs} args - Arguments to filter YieldOpportunities to count.
     * @example
     * // Count the number of YieldOpportunities
     * const count = await prisma.yieldOpportunity.count({
     *   where: {
     *     // ... the filter for the YieldOpportunities we want to count
     *   }
     * })
    **/
    count<T extends YieldOpportunityCountArgs>(
      args?: Subset<T, YieldOpportunityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], YieldOpportunityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a YieldOpportunity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YieldOpportunityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends YieldOpportunityAggregateArgs>(args: Subset<T, YieldOpportunityAggregateArgs>): Prisma.PrismaPromise<GetYieldOpportunityAggregateType<T>>

    /**
     * Group by YieldOpportunity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YieldOpportunityGroupByArgs} args - Group by arguments.
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
      T extends YieldOpportunityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: YieldOpportunityGroupByArgs['orderBy'] }
        : { orderBy?: YieldOpportunityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, YieldOpportunityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetYieldOpportunityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the YieldOpportunity model
   */
  readonly fields: YieldOpportunityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for YieldOpportunity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__YieldOpportunityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the YieldOpportunity model
   */ 
  interface YieldOpportunityFieldRefs {
    readonly id: FieldRef<"YieldOpportunity", 'String'>
    readonly name: FieldRef<"YieldOpportunity", 'String'>
    readonly content: FieldRef<"YieldOpportunity", 'String'>
    readonly apy: FieldRef<"YieldOpportunity", 'Float'>
    readonly type: FieldRef<"YieldOpportunity", 'String'>
    readonly network: FieldRef<"YieldOpportunity", 'String'>
    readonly tokenSymbol: FieldRef<"YieldOpportunity", 'String'>
    readonly tokenAddress: FieldRef<"YieldOpportunity", 'String'>
    readonly providerId: FieldRef<"YieldOpportunity", 'String'>
    readonly providerName: FieldRef<"YieldOpportunity", 'String'>
    readonly protocol: FieldRef<"YieldOpportunity", 'String'>
    readonly asset: FieldRef<"YieldOpportunity", 'String'>
    readonly tvl: FieldRef<"YieldOpportunity", 'Float'>
    readonly cooldownDays: FieldRef<"YieldOpportunity", 'Int'>
    readonly warmupDays: FieldRef<"YieldOpportunity", 'Int'>
    readonly withdrawDays: FieldRef<"YieldOpportunity", 'Int'>
    readonly canEnter: FieldRef<"YieldOpportunity", 'Boolean'>
    readonly canExit: FieldRef<"YieldOpportunity", 'Boolean'>
    readonly createdAt: FieldRef<"YieldOpportunity", 'DateTime'>
    readonly isAvailable: FieldRef<"YieldOpportunity", 'Boolean'>
    readonly rewardType: FieldRef<"YieldOpportunity", 'String'>
    readonly updatedAt: FieldRef<"YieldOpportunity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * YieldOpportunity findUnique
   */
  export type YieldOpportunityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YieldOpportunity
     */
    select?: YieldOpportunitySelect<ExtArgs> | null
    /**
     * Filter, which YieldOpportunity to fetch.
     */
    where: YieldOpportunityWhereUniqueInput
  }

  /**
   * YieldOpportunity findUniqueOrThrow
   */
  export type YieldOpportunityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YieldOpportunity
     */
    select?: YieldOpportunitySelect<ExtArgs> | null
    /**
     * Filter, which YieldOpportunity to fetch.
     */
    where: YieldOpportunityWhereUniqueInput
  }

  /**
   * YieldOpportunity findFirst
   */
  export type YieldOpportunityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YieldOpportunity
     */
    select?: YieldOpportunitySelect<ExtArgs> | null
    /**
     * Filter, which YieldOpportunity to fetch.
     */
    where?: YieldOpportunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YieldOpportunities to fetch.
     */
    orderBy?: YieldOpportunityOrderByWithRelationInput | YieldOpportunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for YieldOpportunities.
     */
    cursor?: YieldOpportunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YieldOpportunities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YieldOpportunities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of YieldOpportunities.
     */
    distinct?: YieldOpportunityScalarFieldEnum | YieldOpportunityScalarFieldEnum[]
  }

  /**
   * YieldOpportunity findFirstOrThrow
   */
  export type YieldOpportunityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YieldOpportunity
     */
    select?: YieldOpportunitySelect<ExtArgs> | null
    /**
     * Filter, which YieldOpportunity to fetch.
     */
    where?: YieldOpportunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YieldOpportunities to fetch.
     */
    orderBy?: YieldOpportunityOrderByWithRelationInput | YieldOpportunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for YieldOpportunities.
     */
    cursor?: YieldOpportunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YieldOpportunities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YieldOpportunities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of YieldOpportunities.
     */
    distinct?: YieldOpportunityScalarFieldEnum | YieldOpportunityScalarFieldEnum[]
  }

  /**
   * YieldOpportunity findMany
   */
  export type YieldOpportunityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YieldOpportunity
     */
    select?: YieldOpportunitySelect<ExtArgs> | null
    /**
     * Filter, which YieldOpportunities to fetch.
     */
    where?: YieldOpportunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YieldOpportunities to fetch.
     */
    orderBy?: YieldOpportunityOrderByWithRelationInput | YieldOpportunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing YieldOpportunities.
     */
    cursor?: YieldOpportunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YieldOpportunities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YieldOpportunities.
     */
    skip?: number
    distinct?: YieldOpportunityScalarFieldEnum | YieldOpportunityScalarFieldEnum[]
  }

  /**
   * YieldOpportunity create
   */
  export type YieldOpportunityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YieldOpportunity
     */
    select?: YieldOpportunitySelect<ExtArgs> | null
    /**
     * The data needed to create a YieldOpportunity.
     */
    data: XOR<YieldOpportunityCreateInput, YieldOpportunityUncheckedCreateInput>
  }

  /**
   * YieldOpportunity createMany
   */
  export type YieldOpportunityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many YieldOpportunities.
     */
    data: YieldOpportunityCreateManyInput | YieldOpportunityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * YieldOpportunity createManyAndReturn
   */
  export type YieldOpportunityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YieldOpportunity
     */
    select?: YieldOpportunitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many YieldOpportunities.
     */
    data: YieldOpportunityCreateManyInput | YieldOpportunityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * YieldOpportunity update
   */
  export type YieldOpportunityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YieldOpportunity
     */
    select?: YieldOpportunitySelect<ExtArgs> | null
    /**
     * The data needed to update a YieldOpportunity.
     */
    data: XOR<YieldOpportunityUpdateInput, YieldOpportunityUncheckedUpdateInput>
    /**
     * Choose, which YieldOpportunity to update.
     */
    where: YieldOpportunityWhereUniqueInput
  }

  /**
   * YieldOpportunity updateMany
   */
  export type YieldOpportunityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update YieldOpportunities.
     */
    data: XOR<YieldOpportunityUpdateManyMutationInput, YieldOpportunityUncheckedUpdateManyInput>
    /**
     * Filter which YieldOpportunities to update
     */
    where?: YieldOpportunityWhereInput
  }

  /**
   * YieldOpportunity upsert
   */
  export type YieldOpportunityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YieldOpportunity
     */
    select?: YieldOpportunitySelect<ExtArgs> | null
    /**
     * The filter to search for the YieldOpportunity to update in case it exists.
     */
    where: YieldOpportunityWhereUniqueInput
    /**
     * In case the YieldOpportunity found by the `where` argument doesn't exist, create a new YieldOpportunity with this data.
     */
    create: XOR<YieldOpportunityCreateInput, YieldOpportunityUncheckedCreateInput>
    /**
     * In case the YieldOpportunity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<YieldOpportunityUpdateInput, YieldOpportunityUncheckedUpdateInput>
  }

  /**
   * YieldOpportunity delete
   */
  export type YieldOpportunityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YieldOpportunity
     */
    select?: YieldOpportunitySelect<ExtArgs> | null
    /**
     * Filter which YieldOpportunity to delete.
     */
    where: YieldOpportunityWhereUniqueInput
  }

  /**
   * YieldOpportunity deleteMany
   */
  export type YieldOpportunityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which YieldOpportunities to delete
     */
    where?: YieldOpportunityWhereInput
  }

  /**
   * YieldOpportunity without action
   */
  export type YieldOpportunityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YieldOpportunity
     */
    select?: YieldOpportunitySelect<ExtArgs> | null
  }


  /**
   * Model PortfolioPosition
   */

  export type AggregatePortfolioPosition = {
    _count: PortfolioPositionCountAggregateOutputType | null
    _avg: PortfolioPositionAvgAggregateOutputType | null
    _sum: PortfolioPositionSumAggregateOutputType | null
    _min: PortfolioPositionMinAggregateOutputType | null
    _max: PortfolioPositionMaxAggregateOutputType | null
  }

  export type PortfolioPositionAvgAggregateOutputType = {
    amount: number | null
    currentApy: number | null
  }

  export type PortfolioPositionSumAggregateOutputType = {
    amount: number | null
    currentApy: number | null
  }

  export type PortfolioPositionMinAggregateOutputType = {
    id: string | null
    yieldOpportunityId: string | null
    amount: number | null
    entryDate: Date | null
    lastModified: Date | null
    currentApy: number | null
    isActive: boolean | null
    exitTxHash: string | null
    entryTxHash: string | null
    tokenAddress: string | null
    tokenSymbol: string | null
    walletAddress: string | null
    integrationId: string | null
    lastBalanceSync: Date | null
  }

  export type PortfolioPositionMaxAggregateOutputType = {
    id: string | null
    yieldOpportunityId: string | null
    amount: number | null
    entryDate: Date | null
    lastModified: Date | null
    currentApy: number | null
    isActive: boolean | null
    exitTxHash: string | null
    entryTxHash: string | null
    tokenAddress: string | null
    tokenSymbol: string | null
    walletAddress: string | null
    integrationId: string | null
    lastBalanceSync: Date | null
  }

  export type PortfolioPositionCountAggregateOutputType = {
    id: number
    yieldOpportunityId: number
    amount: number
    entryDate: number
    lastModified: number
    currentApy: number
    isActive: number
    exitTxHash: number
    entryTxHash: number
    tokenAddress: number
    tokenSymbol: number
    walletAddress: number
    integrationId: number
    lastBalanceSync: number
    _all: number
  }


  export type PortfolioPositionAvgAggregateInputType = {
    amount?: true
    currentApy?: true
  }

  export type PortfolioPositionSumAggregateInputType = {
    amount?: true
    currentApy?: true
  }

  export type PortfolioPositionMinAggregateInputType = {
    id?: true
    yieldOpportunityId?: true
    amount?: true
    entryDate?: true
    lastModified?: true
    currentApy?: true
    isActive?: true
    exitTxHash?: true
    entryTxHash?: true
    tokenAddress?: true
    tokenSymbol?: true
    walletAddress?: true
    integrationId?: true
    lastBalanceSync?: true
  }

  export type PortfolioPositionMaxAggregateInputType = {
    id?: true
    yieldOpportunityId?: true
    amount?: true
    entryDate?: true
    lastModified?: true
    currentApy?: true
    isActive?: true
    exitTxHash?: true
    entryTxHash?: true
    tokenAddress?: true
    tokenSymbol?: true
    walletAddress?: true
    integrationId?: true
    lastBalanceSync?: true
  }

  export type PortfolioPositionCountAggregateInputType = {
    id?: true
    yieldOpportunityId?: true
    amount?: true
    entryDate?: true
    lastModified?: true
    currentApy?: true
    isActive?: true
    exitTxHash?: true
    entryTxHash?: true
    tokenAddress?: true
    tokenSymbol?: true
    walletAddress?: true
    integrationId?: true
    lastBalanceSync?: true
    _all?: true
  }

  export type PortfolioPositionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortfolioPosition to aggregate.
     */
    where?: PortfolioPositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioPositions to fetch.
     */
    orderBy?: PortfolioPositionOrderByWithRelationInput | PortfolioPositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PortfolioPositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioPositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioPositions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PortfolioPositions
    **/
    _count?: true | PortfolioPositionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PortfolioPositionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PortfolioPositionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortfolioPositionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortfolioPositionMaxAggregateInputType
  }

  export type GetPortfolioPositionAggregateType<T extends PortfolioPositionAggregateArgs> = {
        [P in keyof T & keyof AggregatePortfolioPosition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortfolioPosition[P]>
      : GetScalarType<T[P], AggregatePortfolioPosition[P]>
  }




  export type PortfolioPositionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioPositionWhereInput
    orderBy?: PortfolioPositionOrderByWithAggregationInput | PortfolioPositionOrderByWithAggregationInput[]
    by: PortfolioPositionScalarFieldEnum[] | PortfolioPositionScalarFieldEnum
    having?: PortfolioPositionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortfolioPositionCountAggregateInputType | true
    _avg?: PortfolioPositionAvgAggregateInputType
    _sum?: PortfolioPositionSumAggregateInputType
    _min?: PortfolioPositionMinAggregateInputType
    _max?: PortfolioPositionMaxAggregateInputType
  }

  export type PortfolioPositionGroupByOutputType = {
    id: string
    yieldOpportunityId: string
    amount: number
    entryDate: Date
    lastModified: Date
    currentApy: number
    isActive: boolean
    exitTxHash: string | null
    entryTxHash: string | null
    tokenAddress: string | null
    tokenSymbol: string
    walletAddress: string
    integrationId: string
    lastBalanceSync: Date | null
    _count: PortfolioPositionCountAggregateOutputType | null
    _avg: PortfolioPositionAvgAggregateOutputType | null
    _sum: PortfolioPositionSumAggregateOutputType | null
    _min: PortfolioPositionMinAggregateOutputType | null
    _max: PortfolioPositionMaxAggregateOutputType | null
  }

  type GetPortfolioPositionGroupByPayload<T extends PortfolioPositionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PortfolioPositionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortfolioPositionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortfolioPositionGroupByOutputType[P]>
            : GetScalarType<T[P], PortfolioPositionGroupByOutputType[P]>
        }
      >
    >


  export type PortfolioPositionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    yieldOpportunityId?: boolean
    amount?: boolean
    entryDate?: boolean
    lastModified?: boolean
    currentApy?: boolean
    isActive?: boolean
    exitTxHash?: boolean
    entryTxHash?: boolean
    tokenAddress?: boolean
    tokenSymbol?: boolean
    walletAddress?: boolean
    integrationId?: boolean
    lastBalanceSync?: boolean
  }, ExtArgs["result"]["portfolioPosition"]>

  export type PortfolioPositionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    yieldOpportunityId?: boolean
    amount?: boolean
    entryDate?: boolean
    lastModified?: boolean
    currentApy?: boolean
    isActive?: boolean
    exitTxHash?: boolean
    entryTxHash?: boolean
    tokenAddress?: boolean
    tokenSymbol?: boolean
    walletAddress?: boolean
    integrationId?: boolean
    lastBalanceSync?: boolean
  }, ExtArgs["result"]["portfolioPosition"]>

  export type PortfolioPositionSelectScalar = {
    id?: boolean
    yieldOpportunityId?: boolean
    amount?: boolean
    entryDate?: boolean
    lastModified?: boolean
    currentApy?: boolean
    isActive?: boolean
    exitTxHash?: boolean
    entryTxHash?: boolean
    tokenAddress?: boolean
    tokenSymbol?: boolean
    walletAddress?: boolean
    integrationId?: boolean
    lastBalanceSync?: boolean
  }


  export type $PortfolioPositionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PortfolioPosition"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      yieldOpportunityId: string
      amount: number
      entryDate: Date
      lastModified: Date
      currentApy: number
      isActive: boolean
      exitTxHash: string | null
      entryTxHash: string | null
      tokenAddress: string | null
      tokenSymbol: string
      walletAddress: string
      integrationId: string
      lastBalanceSync: Date | null
    }, ExtArgs["result"]["portfolioPosition"]>
    composites: {}
  }

  type PortfolioPositionGetPayload<S extends boolean | null | undefined | PortfolioPositionDefaultArgs> = $Result.GetResult<Prisma.$PortfolioPositionPayload, S>

  type PortfolioPositionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PortfolioPositionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PortfolioPositionCountAggregateInputType | true
    }

  export interface PortfolioPositionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PortfolioPosition'], meta: { name: 'PortfolioPosition' } }
    /**
     * Find zero or one PortfolioPosition that matches the filter.
     * @param {PortfolioPositionFindUniqueArgs} args - Arguments to find a PortfolioPosition
     * @example
     * // Get one PortfolioPosition
     * const portfolioPosition = await prisma.portfolioPosition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PortfolioPositionFindUniqueArgs>(args: SelectSubset<T, PortfolioPositionFindUniqueArgs<ExtArgs>>): Prisma__PortfolioPositionClient<$Result.GetResult<Prisma.$PortfolioPositionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PortfolioPosition that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PortfolioPositionFindUniqueOrThrowArgs} args - Arguments to find a PortfolioPosition
     * @example
     * // Get one PortfolioPosition
     * const portfolioPosition = await prisma.portfolioPosition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PortfolioPositionFindUniqueOrThrowArgs>(args: SelectSubset<T, PortfolioPositionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PortfolioPositionClient<$Result.GetResult<Prisma.$PortfolioPositionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PortfolioPosition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioPositionFindFirstArgs} args - Arguments to find a PortfolioPosition
     * @example
     * // Get one PortfolioPosition
     * const portfolioPosition = await prisma.portfolioPosition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PortfolioPositionFindFirstArgs>(args?: SelectSubset<T, PortfolioPositionFindFirstArgs<ExtArgs>>): Prisma__PortfolioPositionClient<$Result.GetResult<Prisma.$PortfolioPositionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PortfolioPosition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioPositionFindFirstOrThrowArgs} args - Arguments to find a PortfolioPosition
     * @example
     * // Get one PortfolioPosition
     * const portfolioPosition = await prisma.portfolioPosition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PortfolioPositionFindFirstOrThrowArgs>(args?: SelectSubset<T, PortfolioPositionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PortfolioPositionClient<$Result.GetResult<Prisma.$PortfolioPositionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PortfolioPositions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioPositionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PortfolioPositions
     * const portfolioPositions = await prisma.portfolioPosition.findMany()
     * 
     * // Get first 10 PortfolioPositions
     * const portfolioPositions = await prisma.portfolioPosition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const portfolioPositionWithIdOnly = await prisma.portfolioPosition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PortfolioPositionFindManyArgs>(args?: SelectSubset<T, PortfolioPositionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioPositionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PortfolioPosition.
     * @param {PortfolioPositionCreateArgs} args - Arguments to create a PortfolioPosition.
     * @example
     * // Create one PortfolioPosition
     * const PortfolioPosition = await prisma.portfolioPosition.create({
     *   data: {
     *     // ... data to create a PortfolioPosition
     *   }
     * })
     * 
     */
    create<T extends PortfolioPositionCreateArgs>(args: SelectSubset<T, PortfolioPositionCreateArgs<ExtArgs>>): Prisma__PortfolioPositionClient<$Result.GetResult<Prisma.$PortfolioPositionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PortfolioPositions.
     * @param {PortfolioPositionCreateManyArgs} args - Arguments to create many PortfolioPositions.
     * @example
     * // Create many PortfolioPositions
     * const portfolioPosition = await prisma.portfolioPosition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PortfolioPositionCreateManyArgs>(args?: SelectSubset<T, PortfolioPositionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PortfolioPositions and returns the data saved in the database.
     * @param {PortfolioPositionCreateManyAndReturnArgs} args - Arguments to create many PortfolioPositions.
     * @example
     * // Create many PortfolioPositions
     * const portfolioPosition = await prisma.portfolioPosition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PortfolioPositions and only return the `id`
     * const portfolioPositionWithIdOnly = await prisma.portfolioPosition.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PortfolioPositionCreateManyAndReturnArgs>(args?: SelectSubset<T, PortfolioPositionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioPositionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PortfolioPosition.
     * @param {PortfolioPositionDeleteArgs} args - Arguments to delete one PortfolioPosition.
     * @example
     * // Delete one PortfolioPosition
     * const PortfolioPosition = await prisma.portfolioPosition.delete({
     *   where: {
     *     // ... filter to delete one PortfolioPosition
     *   }
     * })
     * 
     */
    delete<T extends PortfolioPositionDeleteArgs>(args: SelectSubset<T, PortfolioPositionDeleteArgs<ExtArgs>>): Prisma__PortfolioPositionClient<$Result.GetResult<Prisma.$PortfolioPositionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PortfolioPosition.
     * @param {PortfolioPositionUpdateArgs} args - Arguments to update one PortfolioPosition.
     * @example
     * // Update one PortfolioPosition
     * const portfolioPosition = await prisma.portfolioPosition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PortfolioPositionUpdateArgs>(args: SelectSubset<T, PortfolioPositionUpdateArgs<ExtArgs>>): Prisma__PortfolioPositionClient<$Result.GetResult<Prisma.$PortfolioPositionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PortfolioPositions.
     * @param {PortfolioPositionDeleteManyArgs} args - Arguments to filter PortfolioPositions to delete.
     * @example
     * // Delete a few PortfolioPositions
     * const { count } = await prisma.portfolioPosition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PortfolioPositionDeleteManyArgs>(args?: SelectSubset<T, PortfolioPositionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortfolioPositions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioPositionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PortfolioPositions
     * const portfolioPosition = await prisma.portfolioPosition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PortfolioPositionUpdateManyArgs>(args: SelectSubset<T, PortfolioPositionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PortfolioPosition.
     * @param {PortfolioPositionUpsertArgs} args - Arguments to update or create a PortfolioPosition.
     * @example
     * // Update or create a PortfolioPosition
     * const portfolioPosition = await prisma.portfolioPosition.upsert({
     *   create: {
     *     // ... data to create a PortfolioPosition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PortfolioPosition we want to update
     *   }
     * })
     */
    upsert<T extends PortfolioPositionUpsertArgs>(args: SelectSubset<T, PortfolioPositionUpsertArgs<ExtArgs>>): Prisma__PortfolioPositionClient<$Result.GetResult<Prisma.$PortfolioPositionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PortfolioPositions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioPositionCountArgs} args - Arguments to filter PortfolioPositions to count.
     * @example
     * // Count the number of PortfolioPositions
     * const count = await prisma.portfolioPosition.count({
     *   where: {
     *     // ... the filter for the PortfolioPositions we want to count
     *   }
     * })
    **/
    count<T extends PortfolioPositionCountArgs>(
      args?: Subset<T, PortfolioPositionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortfolioPositionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PortfolioPosition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioPositionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PortfolioPositionAggregateArgs>(args: Subset<T, PortfolioPositionAggregateArgs>): Prisma.PrismaPromise<GetPortfolioPositionAggregateType<T>>

    /**
     * Group by PortfolioPosition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioPositionGroupByArgs} args - Group by arguments.
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
      T extends PortfolioPositionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortfolioPositionGroupByArgs['orderBy'] }
        : { orderBy?: PortfolioPositionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PortfolioPositionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortfolioPositionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PortfolioPosition model
   */
  readonly fields: PortfolioPositionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PortfolioPosition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PortfolioPositionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the PortfolioPosition model
   */ 
  interface PortfolioPositionFieldRefs {
    readonly id: FieldRef<"PortfolioPosition", 'String'>
    readonly yieldOpportunityId: FieldRef<"PortfolioPosition", 'String'>
    readonly amount: FieldRef<"PortfolioPosition", 'Float'>
    readonly entryDate: FieldRef<"PortfolioPosition", 'DateTime'>
    readonly lastModified: FieldRef<"PortfolioPosition", 'DateTime'>
    readonly currentApy: FieldRef<"PortfolioPosition", 'Float'>
    readonly isActive: FieldRef<"PortfolioPosition", 'Boolean'>
    readonly exitTxHash: FieldRef<"PortfolioPosition", 'String'>
    readonly entryTxHash: FieldRef<"PortfolioPosition", 'String'>
    readonly tokenAddress: FieldRef<"PortfolioPosition", 'String'>
    readonly tokenSymbol: FieldRef<"PortfolioPosition", 'String'>
    readonly walletAddress: FieldRef<"PortfolioPosition", 'String'>
    readonly integrationId: FieldRef<"PortfolioPosition", 'String'>
    readonly lastBalanceSync: FieldRef<"PortfolioPosition", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PortfolioPosition findUnique
   */
  export type PortfolioPositionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioPosition
     */
    select?: PortfolioPositionSelect<ExtArgs> | null
    /**
     * Filter, which PortfolioPosition to fetch.
     */
    where: PortfolioPositionWhereUniqueInput
  }

  /**
   * PortfolioPosition findUniqueOrThrow
   */
  export type PortfolioPositionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioPosition
     */
    select?: PortfolioPositionSelect<ExtArgs> | null
    /**
     * Filter, which PortfolioPosition to fetch.
     */
    where: PortfolioPositionWhereUniqueInput
  }

  /**
   * PortfolioPosition findFirst
   */
  export type PortfolioPositionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioPosition
     */
    select?: PortfolioPositionSelect<ExtArgs> | null
    /**
     * Filter, which PortfolioPosition to fetch.
     */
    where?: PortfolioPositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioPositions to fetch.
     */
    orderBy?: PortfolioPositionOrderByWithRelationInput | PortfolioPositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortfolioPositions.
     */
    cursor?: PortfolioPositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioPositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioPositions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortfolioPositions.
     */
    distinct?: PortfolioPositionScalarFieldEnum | PortfolioPositionScalarFieldEnum[]
  }

  /**
   * PortfolioPosition findFirstOrThrow
   */
  export type PortfolioPositionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioPosition
     */
    select?: PortfolioPositionSelect<ExtArgs> | null
    /**
     * Filter, which PortfolioPosition to fetch.
     */
    where?: PortfolioPositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioPositions to fetch.
     */
    orderBy?: PortfolioPositionOrderByWithRelationInput | PortfolioPositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortfolioPositions.
     */
    cursor?: PortfolioPositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioPositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioPositions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortfolioPositions.
     */
    distinct?: PortfolioPositionScalarFieldEnum | PortfolioPositionScalarFieldEnum[]
  }

  /**
   * PortfolioPosition findMany
   */
  export type PortfolioPositionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioPosition
     */
    select?: PortfolioPositionSelect<ExtArgs> | null
    /**
     * Filter, which PortfolioPositions to fetch.
     */
    where?: PortfolioPositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioPositions to fetch.
     */
    orderBy?: PortfolioPositionOrderByWithRelationInput | PortfolioPositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PortfolioPositions.
     */
    cursor?: PortfolioPositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioPositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioPositions.
     */
    skip?: number
    distinct?: PortfolioPositionScalarFieldEnum | PortfolioPositionScalarFieldEnum[]
  }

  /**
   * PortfolioPosition create
   */
  export type PortfolioPositionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioPosition
     */
    select?: PortfolioPositionSelect<ExtArgs> | null
    /**
     * The data needed to create a PortfolioPosition.
     */
    data: XOR<PortfolioPositionCreateInput, PortfolioPositionUncheckedCreateInput>
  }

  /**
   * PortfolioPosition createMany
   */
  export type PortfolioPositionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PortfolioPositions.
     */
    data: PortfolioPositionCreateManyInput | PortfolioPositionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PortfolioPosition createManyAndReturn
   */
  export type PortfolioPositionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioPosition
     */
    select?: PortfolioPositionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PortfolioPositions.
     */
    data: PortfolioPositionCreateManyInput | PortfolioPositionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PortfolioPosition update
   */
  export type PortfolioPositionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioPosition
     */
    select?: PortfolioPositionSelect<ExtArgs> | null
    /**
     * The data needed to update a PortfolioPosition.
     */
    data: XOR<PortfolioPositionUpdateInput, PortfolioPositionUncheckedUpdateInput>
    /**
     * Choose, which PortfolioPosition to update.
     */
    where: PortfolioPositionWhereUniqueInput
  }

  /**
   * PortfolioPosition updateMany
   */
  export type PortfolioPositionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PortfolioPositions.
     */
    data: XOR<PortfolioPositionUpdateManyMutationInput, PortfolioPositionUncheckedUpdateManyInput>
    /**
     * Filter which PortfolioPositions to update
     */
    where?: PortfolioPositionWhereInput
  }

  /**
   * PortfolioPosition upsert
   */
  export type PortfolioPositionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioPosition
     */
    select?: PortfolioPositionSelect<ExtArgs> | null
    /**
     * The filter to search for the PortfolioPosition to update in case it exists.
     */
    where: PortfolioPositionWhereUniqueInput
    /**
     * In case the PortfolioPosition found by the `where` argument doesn't exist, create a new PortfolioPosition with this data.
     */
    create: XOR<PortfolioPositionCreateInput, PortfolioPositionUncheckedCreateInput>
    /**
     * In case the PortfolioPosition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PortfolioPositionUpdateInput, PortfolioPositionUncheckedUpdateInput>
  }

  /**
   * PortfolioPosition delete
   */
  export type PortfolioPositionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioPosition
     */
    select?: PortfolioPositionSelect<ExtArgs> | null
    /**
     * Filter which PortfolioPosition to delete.
     */
    where: PortfolioPositionWhereUniqueInput
  }

  /**
   * PortfolioPosition deleteMany
   */
  export type PortfolioPositionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortfolioPositions to delete
     */
    where?: PortfolioPositionWhereInput
  }

  /**
   * PortfolioPosition without action
   */
  export type PortfolioPositionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioPosition
     */
    select?: PortfolioPositionSelect<ExtArgs> | null
  }


  /**
   * Model PortfolioRebalance
   */

  export type AggregatePortfolioRebalance = {
    _count: PortfolioRebalanceCountAggregateOutputType | null
    _avg: PortfolioRebalanceAvgAggregateOutputType | null
    _sum: PortfolioRebalanceSumAggregateOutputType | null
    _min: PortfolioRebalanceMinAggregateOutputType | null
    _max: PortfolioRebalanceMaxAggregateOutputType | null
  }

  export type PortfolioRebalanceAvgAggregateOutputType = {
    amount: number | null
    fromApy: number | null
    toApy: number | null
    gasCost: number | null
    annualIncomeChange: number | null
  }

  export type PortfolioRebalanceSumAggregateOutputType = {
    amount: number | null
    fromApy: number | null
    toApy: number | null
    gasCost: number | null
    annualIncomeChange: number | null
  }

  export type PortfolioRebalanceMinAggregateOutputType = {
    id: string | null
    fromPositionId: string | null
    toPositionId: string | null
    amount: number | null
    executedAt: Date | null
    fromApy: number | null
    toApy: number | null
    gasCost: number | null
    annualIncomeChange: number | null
  }

  export type PortfolioRebalanceMaxAggregateOutputType = {
    id: string | null
    fromPositionId: string | null
    toPositionId: string | null
    amount: number | null
    executedAt: Date | null
    fromApy: number | null
    toApy: number | null
    gasCost: number | null
    annualIncomeChange: number | null
  }

  export type PortfolioRebalanceCountAggregateOutputType = {
    id: number
    fromPositionId: number
    toPositionId: number
    amount: number
    executedAt: number
    fromApy: number
    toApy: number
    gasCost: number
    annualIncomeChange: number
    _all: number
  }


  export type PortfolioRebalanceAvgAggregateInputType = {
    amount?: true
    fromApy?: true
    toApy?: true
    gasCost?: true
    annualIncomeChange?: true
  }

  export type PortfolioRebalanceSumAggregateInputType = {
    amount?: true
    fromApy?: true
    toApy?: true
    gasCost?: true
    annualIncomeChange?: true
  }

  export type PortfolioRebalanceMinAggregateInputType = {
    id?: true
    fromPositionId?: true
    toPositionId?: true
    amount?: true
    executedAt?: true
    fromApy?: true
    toApy?: true
    gasCost?: true
    annualIncomeChange?: true
  }

  export type PortfolioRebalanceMaxAggregateInputType = {
    id?: true
    fromPositionId?: true
    toPositionId?: true
    amount?: true
    executedAt?: true
    fromApy?: true
    toApy?: true
    gasCost?: true
    annualIncomeChange?: true
  }

  export type PortfolioRebalanceCountAggregateInputType = {
    id?: true
    fromPositionId?: true
    toPositionId?: true
    amount?: true
    executedAt?: true
    fromApy?: true
    toApy?: true
    gasCost?: true
    annualIncomeChange?: true
    _all?: true
  }

  export type PortfolioRebalanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortfolioRebalance to aggregate.
     */
    where?: PortfolioRebalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioRebalances to fetch.
     */
    orderBy?: PortfolioRebalanceOrderByWithRelationInput | PortfolioRebalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PortfolioRebalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioRebalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioRebalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PortfolioRebalances
    **/
    _count?: true | PortfolioRebalanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PortfolioRebalanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PortfolioRebalanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortfolioRebalanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortfolioRebalanceMaxAggregateInputType
  }

  export type GetPortfolioRebalanceAggregateType<T extends PortfolioRebalanceAggregateArgs> = {
        [P in keyof T & keyof AggregatePortfolioRebalance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortfolioRebalance[P]>
      : GetScalarType<T[P], AggregatePortfolioRebalance[P]>
  }




  export type PortfolioRebalanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioRebalanceWhereInput
    orderBy?: PortfolioRebalanceOrderByWithAggregationInput | PortfolioRebalanceOrderByWithAggregationInput[]
    by: PortfolioRebalanceScalarFieldEnum[] | PortfolioRebalanceScalarFieldEnum
    having?: PortfolioRebalanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortfolioRebalanceCountAggregateInputType | true
    _avg?: PortfolioRebalanceAvgAggregateInputType
    _sum?: PortfolioRebalanceSumAggregateInputType
    _min?: PortfolioRebalanceMinAggregateInputType
    _max?: PortfolioRebalanceMaxAggregateInputType
  }

  export type PortfolioRebalanceGroupByOutputType = {
    id: string
    fromPositionId: string
    toPositionId: string
    amount: number
    executedAt: Date
    fromApy: number
    toApy: number
    gasCost: number
    annualIncomeChange: number
    _count: PortfolioRebalanceCountAggregateOutputType | null
    _avg: PortfolioRebalanceAvgAggregateOutputType | null
    _sum: PortfolioRebalanceSumAggregateOutputType | null
    _min: PortfolioRebalanceMinAggregateOutputType | null
    _max: PortfolioRebalanceMaxAggregateOutputType | null
  }

  type GetPortfolioRebalanceGroupByPayload<T extends PortfolioRebalanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PortfolioRebalanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortfolioRebalanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortfolioRebalanceGroupByOutputType[P]>
            : GetScalarType<T[P], PortfolioRebalanceGroupByOutputType[P]>
        }
      >
    >


  export type PortfolioRebalanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromPositionId?: boolean
    toPositionId?: boolean
    amount?: boolean
    executedAt?: boolean
    fromApy?: boolean
    toApy?: boolean
    gasCost?: boolean
    annualIncomeChange?: boolean
  }, ExtArgs["result"]["portfolioRebalance"]>

  export type PortfolioRebalanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromPositionId?: boolean
    toPositionId?: boolean
    amount?: boolean
    executedAt?: boolean
    fromApy?: boolean
    toApy?: boolean
    gasCost?: boolean
    annualIncomeChange?: boolean
  }, ExtArgs["result"]["portfolioRebalance"]>

  export type PortfolioRebalanceSelectScalar = {
    id?: boolean
    fromPositionId?: boolean
    toPositionId?: boolean
    amount?: boolean
    executedAt?: boolean
    fromApy?: boolean
    toApy?: boolean
    gasCost?: boolean
    annualIncomeChange?: boolean
  }


  export type $PortfolioRebalancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PortfolioRebalance"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fromPositionId: string
      toPositionId: string
      amount: number
      executedAt: Date
      fromApy: number
      toApy: number
      gasCost: number
      annualIncomeChange: number
    }, ExtArgs["result"]["portfolioRebalance"]>
    composites: {}
  }

  type PortfolioRebalanceGetPayload<S extends boolean | null | undefined | PortfolioRebalanceDefaultArgs> = $Result.GetResult<Prisma.$PortfolioRebalancePayload, S>

  type PortfolioRebalanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PortfolioRebalanceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PortfolioRebalanceCountAggregateInputType | true
    }

  export interface PortfolioRebalanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PortfolioRebalance'], meta: { name: 'PortfolioRebalance' } }
    /**
     * Find zero or one PortfolioRebalance that matches the filter.
     * @param {PortfolioRebalanceFindUniqueArgs} args - Arguments to find a PortfolioRebalance
     * @example
     * // Get one PortfolioRebalance
     * const portfolioRebalance = await prisma.portfolioRebalance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PortfolioRebalanceFindUniqueArgs>(args: SelectSubset<T, PortfolioRebalanceFindUniqueArgs<ExtArgs>>): Prisma__PortfolioRebalanceClient<$Result.GetResult<Prisma.$PortfolioRebalancePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PortfolioRebalance that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PortfolioRebalanceFindUniqueOrThrowArgs} args - Arguments to find a PortfolioRebalance
     * @example
     * // Get one PortfolioRebalance
     * const portfolioRebalance = await prisma.portfolioRebalance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PortfolioRebalanceFindUniqueOrThrowArgs>(args: SelectSubset<T, PortfolioRebalanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PortfolioRebalanceClient<$Result.GetResult<Prisma.$PortfolioRebalancePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PortfolioRebalance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioRebalanceFindFirstArgs} args - Arguments to find a PortfolioRebalance
     * @example
     * // Get one PortfolioRebalance
     * const portfolioRebalance = await prisma.portfolioRebalance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PortfolioRebalanceFindFirstArgs>(args?: SelectSubset<T, PortfolioRebalanceFindFirstArgs<ExtArgs>>): Prisma__PortfolioRebalanceClient<$Result.GetResult<Prisma.$PortfolioRebalancePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PortfolioRebalance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioRebalanceFindFirstOrThrowArgs} args - Arguments to find a PortfolioRebalance
     * @example
     * // Get one PortfolioRebalance
     * const portfolioRebalance = await prisma.portfolioRebalance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PortfolioRebalanceFindFirstOrThrowArgs>(args?: SelectSubset<T, PortfolioRebalanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__PortfolioRebalanceClient<$Result.GetResult<Prisma.$PortfolioRebalancePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PortfolioRebalances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioRebalanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PortfolioRebalances
     * const portfolioRebalances = await prisma.portfolioRebalance.findMany()
     * 
     * // Get first 10 PortfolioRebalances
     * const portfolioRebalances = await prisma.portfolioRebalance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const portfolioRebalanceWithIdOnly = await prisma.portfolioRebalance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PortfolioRebalanceFindManyArgs>(args?: SelectSubset<T, PortfolioRebalanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioRebalancePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PortfolioRebalance.
     * @param {PortfolioRebalanceCreateArgs} args - Arguments to create a PortfolioRebalance.
     * @example
     * // Create one PortfolioRebalance
     * const PortfolioRebalance = await prisma.portfolioRebalance.create({
     *   data: {
     *     // ... data to create a PortfolioRebalance
     *   }
     * })
     * 
     */
    create<T extends PortfolioRebalanceCreateArgs>(args: SelectSubset<T, PortfolioRebalanceCreateArgs<ExtArgs>>): Prisma__PortfolioRebalanceClient<$Result.GetResult<Prisma.$PortfolioRebalancePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PortfolioRebalances.
     * @param {PortfolioRebalanceCreateManyArgs} args - Arguments to create many PortfolioRebalances.
     * @example
     * // Create many PortfolioRebalances
     * const portfolioRebalance = await prisma.portfolioRebalance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PortfolioRebalanceCreateManyArgs>(args?: SelectSubset<T, PortfolioRebalanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PortfolioRebalances and returns the data saved in the database.
     * @param {PortfolioRebalanceCreateManyAndReturnArgs} args - Arguments to create many PortfolioRebalances.
     * @example
     * // Create many PortfolioRebalances
     * const portfolioRebalance = await prisma.portfolioRebalance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PortfolioRebalances and only return the `id`
     * const portfolioRebalanceWithIdOnly = await prisma.portfolioRebalance.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PortfolioRebalanceCreateManyAndReturnArgs>(args?: SelectSubset<T, PortfolioRebalanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioRebalancePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PortfolioRebalance.
     * @param {PortfolioRebalanceDeleteArgs} args - Arguments to delete one PortfolioRebalance.
     * @example
     * // Delete one PortfolioRebalance
     * const PortfolioRebalance = await prisma.portfolioRebalance.delete({
     *   where: {
     *     // ... filter to delete one PortfolioRebalance
     *   }
     * })
     * 
     */
    delete<T extends PortfolioRebalanceDeleteArgs>(args: SelectSubset<T, PortfolioRebalanceDeleteArgs<ExtArgs>>): Prisma__PortfolioRebalanceClient<$Result.GetResult<Prisma.$PortfolioRebalancePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PortfolioRebalance.
     * @param {PortfolioRebalanceUpdateArgs} args - Arguments to update one PortfolioRebalance.
     * @example
     * // Update one PortfolioRebalance
     * const portfolioRebalance = await prisma.portfolioRebalance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PortfolioRebalanceUpdateArgs>(args: SelectSubset<T, PortfolioRebalanceUpdateArgs<ExtArgs>>): Prisma__PortfolioRebalanceClient<$Result.GetResult<Prisma.$PortfolioRebalancePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PortfolioRebalances.
     * @param {PortfolioRebalanceDeleteManyArgs} args - Arguments to filter PortfolioRebalances to delete.
     * @example
     * // Delete a few PortfolioRebalances
     * const { count } = await prisma.portfolioRebalance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PortfolioRebalanceDeleteManyArgs>(args?: SelectSubset<T, PortfolioRebalanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortfolioRebalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioRebalanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PortfolioRebalances
     * const portfolioRebalance = await prisma.portfolioRebalance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PortfolioRebalanceUpdateManyArgs>(args: SelectSubset<T, PortfolioRebalanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PortfolioRebalance.
     * @param {PortfolioRebalanceUpsertArgs} args - Arguments to update or create a PortfolioRebalance.
     * @example
     * // Update or create a PortfolioRebalance
     * const portfolioRebalance = await prisma.portfolioRebalance.upsert({
     *   create: {
     *     // ... data to create a PortfolioRebalance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PortfolioRebalance we want to update
     *   }
     * })
     */
    upsert<T extends PortfolioRebalanceUpsertArgs>(args: SelectSubset<T, PortfolioRebalanceUpsertArgs<ExtArgs>>): Prisma__PortfolioRebalanceClient<$Result.GetResult<Prisma.$PortfolioRebalancePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PortfolioRebalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioRebalanceCountArgs} args - Arguments to filter PortfolioRebalances to count.
     * @example
     * // Count the number of PortfolioRebalances
     * const count = await prisma.portfolioRebalance.count({
     *   where: {
     *     // ... the filter for the PortfolioRebalances we want to count
     *   }
     * })
    **/
    count<T extends PortfolioRebalanceCountArgs>(
      args?: Subset<T, PortfolioRebalanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortfolioRebalanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PortfolioRebalance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioRebalanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PortfolioRebalanceAggregateArgs>(args: Subset<T, PortfolioRebalanceAggregateArgs>): Prisma.PrismaPromise<GetPortfolioRebalanceAggregateType<T>>

    /**
     * Group by PortfolioRebalance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioRebalanceGroupByArgs} args - Group by arguments.
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
      T extends PortfolioRebalanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortfolioRebalanceGroupByArgs['orderBy'] }
        : { orderBy?: PortfolioRebalanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PortfolioRebalanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortfolioRebalanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PortfolioRebalance model
   */
  readonly fields: PortfolioRebalanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PortfolioRebalance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PortfolioRebalanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the PortfolioRebalance model
   */ 
  interface PortfolioRebalanceFieldRefs {
    readonly id: FieldRef<"PortfolioRebalance", 'String'>
    readonly fromPositionId: FieldRef<"PortfolioRebalance", 'String'>
    readonly toPositionId: FieldRef<"PortfolioRebalance", 'String'>
    readonly amount: FieldRef<"PortfolioRebalance", 'Float'>
    readonly executedAt: FieldRef<"PortfolioRebalance", 'DateTime'>
    readonly fromApy: FieldRef<"PortfolioRebalance", 'Float'>
    readonly toApy: FieldRef<"PortfolioRebalance", 'Float'>
    readonly gasCost: FieldRef<"PortfolioRebalance", 'Float'>
    readonly annualIncomeChange: FieldRef<"PortfolioRebalance", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * PortfolioRebalance findUnique
   */
  export type PortfolioRebalanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioRebalance
     */
    select?: PortfolioRebalanceSelect<ExtArgs> | null
    /**
     * Filter, which PortfolioRebalance to fetch.
     */
    where: PortfolioRebalanceWhereUniqueInput
  }

  /**
   * PortfolioRebalance findUniqueOrThrow
   */
  export type PortfolioRebalanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioRebalance
     */
    select?: PortfolioRebalanceSelect<ExtArgs> | null
    /**
     * Filter, which PortfolioRebalance to fetch.
     */
    where: PortfolioRebalanceWhereUniqueInput
  }

  /**
   * PortfolioRebalance findFirst
   */
  export type PortfolioRebalanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioRebalance
     */
    select?: PortfolioRebalanceSelect<ExtArgs> | null
    /**
     * Filter, which PortfolioRebalance to fetch.
     */
    where?: PortfolioRebalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioRebalances to fetch.
     */
    orderBy?: PortfolioRebalanceOrderByWithRelationInput | PortfolioRebalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortfolioRebalances.
     */
    cursor?: PortfolioRebalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioRebalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioRebalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortfolioRebalances.
     */
    distinct?: PortfolioRebalanceScalarFieldEnum | PortfolioRebalanceScalarFieldEnum[]
  }

  /**
   * PortfolioRebalance findFirstOrThrow
   */
  export type PortfolioRebalanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioRebalance
     */
    select?: PortfolioRebalanceSelect<ExtArgs> | null
    /**
     * Filter, which PortfolioRebalance to fetch.
     */
    where?: PortfolioRebalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioRebalances to fetch.
     */
    orderBy?: PortfolioRebalanceOrderByWithRelationInput | PortfolioRebalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortfolioRebalances.
     */
    cursor?: PortfolioRebalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioRebalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioRebalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortfolioRebalances.
     */
    distinct?: PortfolioRebalanceScalarFieldEnum | PortfolioRebalanceScalarFieldEnum[]
  }

  /**
   * PortfolioRebalance findMany
   */
  export type PortfolioRebalanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioRebalance
     */
    select?: PortfolioRebalanceSelect<ExtArgs> | null
    /**
     * Filter, which PortfolioRebalances to fetch.
     */
    where?: PortfolioRebalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioRebalances to fetch.
     */
    orderBy?: PortfolioRebalanceOrderByWithRelationInput | PortfolioRebalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PortfolioRebalances.
     */
    cursor?: PortfolioRebalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioRebalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioRebalances.
     */
    skip?: number
    distinct?: PortfolioRebalanceScalarFieldEnum | PortfolioRebalanceScalarFieldEnum[]
  }

  /**
   * PortfolioRebalance create
   */
  export type PortfolioRebalanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioRebalance
     */
    select?: PortfolioRebalanceSelect<ExtArgs> | null
    /**
     * The data needed to create a PortfolioRebalance.
     */
    data: XOR<PortfolioRebalanceCreateInput, PortfolioRebalanceUncheckedCreateInput>
  }

  /**
   * PortfolioRebalance createMany
   */
  export type PortfolioRebalanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PortfolioRebalances.
     */
    data: PortfolioRebalanceCreateManyInput | PortfolioRebalanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PortfolioRebalance createManyAndReturn
   */
  export type PortfolioRebalanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioRebalance
     */
    select?: PortfolioRebalanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PortfolioRebalances.
     */
    data: PortfolioRebalanceCreateManyInput | PortfolioRebalanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PortfolioRebalance update
   */
  export type PortfolioRebalanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioRebalance
     */
    select?: PortfolioRebalanceSelect<ExtArgs> | null
    /**
     * The data needed to update a PortfolioRebalance.
     */
    data: XOR<PortfolioRebalanceUpdateInput, PortfolioRebalanceUncheckedUpdateInput>
    /**
     * Choose, which PortfolioRebalance to update.
     */
    where: PortfolioRebalanceWhereUniqueInput
  }

  /**
   * PortfolioRebalance updateMany
   */
  export type PortfolioRebalanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PortfolioRebalances.
     */
    data: XOR<PortfolioRebalanceUpdateManyMutationInput, PortfolioRebalanceUncheckedUpdateManyInput>
    /**
     * Filter which PortfolioRebalances to update
     */
    where?: PortfolioRebalanceWhereInput
  }

  /**
   * PortfolioRebalance upsert
   */
  export type PortfolioRebalanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioRebalance
     */
    select?: PortfolioRebalanceSelect<ExtArgs> | null
    /**
     * The filter to search for the PortfolioRebalance to update in case it exists.
     */
    where: PortfolioRebalanceWhereUniqueInput
    /**
     * In case the PortfolioRebalance found by the `where` argument doesn't exist, create a new PortfolioRebalance with this data.
     */
    create: XOR<PortfolioRebalanceCreateInput, PortfolioRebalanceUncheckedCreateInput>
    /**
     * In case the PortfolioRebalance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PortfolioRebalanceUpdateInput, PortfolioRebalanceUncheckedUpdateInput>
  }

  /**
   * PortfolioRebalance delete
   */
  export type PortfolioRebalanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioRebalance
     */
    select?: PortfolioRebalanceSelect<ExtArgs> | null
    /**
     * Filter which PortfolioRebalance to delete.
     */
    where: PortfolioRebalanceWhereUniqueInput
  }

  /**
   * PortfolioRebalance deleteMany
   */
  export type PortfolioRebalanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortfolioRebalances to delete
     */
    where?: PortfolioRebalanceWhereInput
  }

  /**
   * PortfolioRebalance without action
   */
  export type PortfolioRebalanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioRebalance
     */
    select?: PortfolioRebalanceSelect<ExtArgs> | null
  }


  /**
   * Model PortfolioTransaction
   */

  export type AggregatePortfolioTransaction = {
    _count: PortfolioTransactionCountAggregateOutputType | null
    _avg: PortfolioTransactionAvgAggregateOutputType | null
    _sum: PortfolioTransactionSumAggregateOutputType | null
    _min: PortfolioTransactionMinAggregateOutputType | null
    _max: PortfolioTransactionMaxAggregateOutputType | null
  }

  export type PortfolioTransactionAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PortfolioTransactionSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PortfolioTransactionMinAggregateOutputType = {
    id: string | null
    walletAddress: string | null
    integrationId: string | null
    direction: $Enums.PortfolioDirection | null
    amount: Decimal | null
    txHash: string | null
    executedAt: Date | null
  }

  export type PortfolioTransactionMaxAggregateOutputType = {
    id: string | null
    walletAddress: string | null
    integrationId: string | null
    direction: $Enums.PortfolioDirection | null
    amount: Decimal | null
    txHash: string | null
    executedAt: Date | null
  }

  export type PortfolioTransactionCountAggregateOutputType = {
    id: number
    walletAddress: number
    integrationId: number
    direction: number
    amount: number
    txHash: number
    executedAt: number
    _all: number
  }


  export type PortfolioTransactionAvgAggregateInputType = {
    amount?: true
  }

  export type PortfolioTransactionSumAggregateInputType = {
    amount?: true
  }

  export type PortfolioTransactionMinAggregateInputType = {
    id?: true
    walletAddress?: true
    integrationId?: true
    direction?: true
    amount?: true
    txHash?: true
    executedAt?: true
  }

  export type PortfolioTransactionMaxAggregateInputType = {
    id?: true
    walletAddress?: true
    integrationId?: true
    direction?: true
    amount?: true
    txHash?: true
    executedAt?: true
  }

  export type PortfolioTransactionCountAggregateInputType = {
    id?: true
    walletAddress?: true
    integrationId?: true
    direction?: true
    amount?: true
    txHash?: true
    executedAt?: true
    _all?: true
  }

  export type PortfolioTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortfolioTransaction to aggregate.
     */
    where?: PortfolioTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioTransactions to fetch.
     */
    orderBy?: PortfolioTransactionOrderByWithRelationInput | PortfolioTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PortfolioTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PortfolioTransactions
    **/
    _count?: true | PortfolioTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PortfolioTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PortfolioTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortfolioTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortfolioTransactionMaxAggregateInputType
  }

  export type GetPortfolioTransactionAggregateType<T extends PortfolioTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregatePortfolioTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortfolioTransaction[P]>
      : GetScalarType<T[P], AggregatePortfolioTransaction[P]>
  }




  export type PortfolioTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioTransactionWhereInput
    orderBy?: PortfolioTransactionOrderByWithAggregationInput | PortfolioTransactionOrderByWithAggregationInput[]
    by: PortfolioTransactionScalarFieldEnum[] | PortfolioTransactionScalarFieldEnum
    having?: PortfolioTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortfolioTransactionCountAggregateInputType | true
    _avg?: PortfolioTransactionAvgAggregateInputType
    _sum?: PortfolioTransactionSumAggregateInputType
    _min?: PortfolioTransactionMinAggregateInputType
    _max?: PortfolioTransactionMaxAggregateInputType
  }

  export type PortfolioTransactionGroupByOutputType = {
    id: string
    walletAddress: string
    integrationId: string
    direction: $Enums.PortfolioDirection
    amount: Decimal
    txHash: string
    executedAt: Date
    _count: PortfolioTransactionCountAggregateOutputType | null
    _avg: PortfolioTransactionAvgAggregateOutputType | null
    _sum: PortfolioTransactionSumAggregateOutputType | null
    _min: PortfolioTransactionMinAggregateOutputType | null
    _max: PortfolioTransactionMaxAggregateOutputType | null
  }

  type GetPortfolioTransactionGroupByPayload<T extends PortfolioTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PortfolioTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortfolioTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortfolioTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], PortfolioTransactionGroupByOutputType[P]>
        }
      >
    >


  export type PortfolioTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletAddress?: boolean
    integrationId?: boolean
    direction?: boolean
    amount?: boolean
    txHash?: boolean
    executedAt?: boolean
  }, ExtArgs["result"]["portfolioTransaction"]>

  export type PortfolioTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletAddress?: boolean
    integrationId?: boolean
    direction?: boolean
    amount?: boolean
    txHash?: boolean
    executedAt?: boolean
  }, ExtArgs["result"]["portfolioTransaction"]>

  export type PortfolioTransactionSelectScalar = {
    id?: boolean
    walletAddress?: boolean
    integrationId?: boolean
    direction?: boolean
    amount?: boolean
    txHash?: boolean
    executedAt?: boolean
  }


  export type $PortfolioTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PortfolioTransaction"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      walletAddress: string
      integrationId: string
      direction: $Enums.PortfolioDirection
      amount: Prisma.Decimal
      txHash: string
      executedAt: Date
    }, ExtArgs["result"]["portfolioTransaction"]>
    composites: {}
  }

  type PortfolioTransactionGetPayload<S extends boolean | null | undefined | PortfolioTransactionDefaultArgs> = $Result.GetResult<Prisma.$PortfolioTransactionPayload, S>

  type PortfolioTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PortfolioTransactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PortfolioTransactionCountAggregateInputType | true
    }

  export interface PortfolioTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PortfolioTransaction'], meta: { name: 'PortfolioTransaction' } }
    /**
     * Find zero or one PortfolioTransaction that matches the filter.
     * @param {PortfolioTransactionFindUniqueArgs} args - Arguments to find a PortfolioTransaction
     * @example
     * // Get one PortfolioTransaction
     * const portfolioTransaction = await prisma.portfolioTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PortfolioTransactionFindUniqueArgs>(args: SelectSubset<T, PortfolioTransactionFindUniqueArgs<ExtArgs>>): Prisma__PortfolioTransactionClient<$Result.GetResult<Prisma.$PortfolioTransactionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PortfolioTransaction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PortfolioTransactionFindUniqueOrThrowArgs} args - Arguments to find a PortfolioTransaction
     * @example
     * // Get one PortfolioTransaction
     * const portfolioTransaction = await prisma.portfolioTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PortfolioTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, PortfolioTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PortfolioTransactionClient<$Result.GetResult<Prisma.$PortfolioTransactionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PortfolioTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioTransactionFindFirstArgs} args - Arguments to find a PortfolioTransaction
     * @example
     * // Get one PortfolioTransaction
     * const portfolioTransaction = await prisma.portfolioTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PortfolioTransactionFindFirstArgs>(args?: SelectSubset<T, PortfolioTransactionFindFirstArgs<ExtArgs>>): Prisma__PortfolioTransactionClient<$Result.GetResult<Prisma.$PortfolioTransactionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PortfolioTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioTransactionFindFirstOrThrowArgs} args - Arguments to find a PortfolioTransaction
     * @example
     * // Get one PortfolioTransaction
     * const portfolioTransaction = await prisma.portfolioTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PortfolioTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, PortfolioTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PortfolioTransactionClient<$Result.GetResult<Prisma.$PortfolioTransactionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PortfolioTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PortfolioTransactions
     * const portfolioTransactions = await prisma.portfolioTransaction.findMany()
     * 
     * // Get first 10 PortfolioTransactions
     * const portfolioTransactions = await prisma.portfolioTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const portfolioTransactionWithIdOnly = await prisma.portfolioTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PortfolioTransactionFindManyArgs>(args?: SelectSubset<T, PortfolioTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioTransactionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PortfolioTransaction.
     * @param {PortfolioTransactionCreateArgs} args - Arguments to create a PortfolioTransaction.
     * @example
     * // Create one PortfolioTransaction
     * const PortfolioTransaction = await prisma.portfolioTransaction.create({
     *   data: {
     *     // ... data to create a PortfolioTransaction
     *   }
     * })
     * 
     */
    create<T extends PortfolioTransactionCreateArgs>(args: SelectSubset<T, PortfolioTransactionCreateArgs<ExtArgs>>): Prisma__PortfolioTransactionClient<$Result.GetResult<Prisma.$PortfolioTransactionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PortfolioTransactions.
     * @param {PortfolioTransactionCreateManyArgs} args - Arguments to create many PortfolioTransactions.
     * @example
     * // Create many PortfolioTransactions
     * const portfolioTransaction = await prisma.portfolioTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PortfolioTransactionCreateManyArgs>(args?: SelectSubset<T, PortfolioTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PortfolioTransactions and returns the data saved in the database.
     * @param {PortfolioTransactionCreateManyAndReturnArgs} args - Arguments to create many PortfolioTransactions.
     * @example
     * // Create many PortfolioTransactions
     * const portfolioTransaction = await prisma.portfolioTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PortfolioTransactions and only return the `id`
     * const portfolioTransactionWithIdOnly = await prisma.portfolioTransaction.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PortfolioTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, PortfolioTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioTransactionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PortfolioTransaction.
     * @param {PortfolioTransactionDeleteArgs} args - Arguments to delete one PortfolioTransaction.
     * @example
     * // Delete one PortfolioTransaction
     * const PortfolioTransaction = await prisma.portfolioTransaction.delete({
     *   where: {
     *     // ... filter to delete one PortfolioTransaction
     *   }
     * })
     * 
     */
    delete<T extends PortfolioTransactionDeleteArgs>(args: SelectSubset<T, PortfolioTransactionDeleteArgs<ExtArgs>>): Prisma__PortfolioTransactionClient<$Result.GetResult<Prisma.$PortfolioTransactionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PortfolioTransaction.
     * @param {PortfolioTransactionUpdateArgs} args - Arguments to update one PortfolioTransaction.
     * @example
     * // Update one PortfolioTransaction
     * const portfolioTransaction = await prisma.portfolioTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PortfolioTransactionUpdateArgs>(args: SelectSubset<T, PortfolioTransactionUpdateArgs<ExtArgs>>): Prisma__PortfolioTransactionClient<$Result.GetResult<Prisma.$PortfolioTransactionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PortfolioTransactions.
     * @param {PortfolioTransactionDeleteManyArgs} args - Arguments to filter PortfolioTransactions to delete.
     * @example
     * // Delete a few PortfolioTransactions
     * const { count } = await prisma.portfolioTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PortfolioTransactionDeleteManyArgs>(args?: SelectSubset<T, PortfolioTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortfolioTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PortfolioTransactions
     * const portfolioTransaction = await prisma.portfolioTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PortfolioTransactionUpdateManyArgs>(args: SelectSubset<T, PortfolioTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PortfolioTransaction.
     * @param {PortfolioTransactionUpsertArgs} args - Arguments to update or create a PortfolioTransaction.
     * @example
     * // Update or create a PortfolioTransaction
     * const portfolioTransaction = await prisma.portfolioTransaction.upsert({
     *   create: {
     *     // ... data to create a PortfolioTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PortfolioTransaction we want to update
     *   }
     * })
     */
    upsert<T extends PortfolioTransactionUpsertArgs>(args: SelectSubset<T, PortfolioTransactionUpsertArgs<ExtArgs>>): Prisma__PortfolioTransactionClient<$Result.GetResult<Prisma.$PortfolioTransactionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PortfolioTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioTransactionCountArgs} args - Arguments to filter PortfolioTransactions to count.
     * @example
     * // Count the number of PortfolioTransactions
     * const count = await prisma.portfolioTransaction.count({
     *   where: {
     *     // ... the filter for the PortfolioTransactions we want to count
     *   }
     * })
    **/
    count<T extends PortfolioTransactionCountArgs>(
      args?: Subset<T, PortfolioTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortfolioTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PortfolioTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PortfolioTransactionAggregateArgs>(args: Subset<T, PortfolioTransactionAggregateArgs>): Prisma.PrismaPromise<GetPortfolioTransactionAggregateType<T>>

    /**
     * Group by PortfolioTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioTransactionGroupByArgs} args - Group by arguments.
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
      T extends PortfolioTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortfolioTransactionGroupByArgs['orderBy'] }
        : { orderBy?: PortfolioTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PortfolioTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortfolioTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PortfolioTransaction model
   */
  readonly fields: PortfolioTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PortfolioTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PortfolioTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the PortfolioTransaction model
   */ 
  interface PortfolioTransactionFieldRefs {
    readonly id: FieldRef<"PortfolioTransaction", 'String'>
    readonly walletAddress: FieldRef<"PortfolioTransaction", 'String'>
    readonly integrationId: FieldRef<"PortfolioTransaction", 'String'>
    readonly direction: FieldRef<"PortfolioTransaction", 'PortfolioDirection'>
    readonly amount: FieldRef<"PortfolioTransaction", 'Decimal'>
    readonly txHash: FieldRef<"PortfolioTransaction", 'String'>
    readonly executedAt: FieldRef<"PortfolioTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PortfolioTransaction findUnique
   */
  export type PortfolioTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioTransaction
     */
    select?: PortfolioTransactionSelect<ExtArgs> | null
    /**
     * Filter, which PortfolioTransaction to fetch.
     */
    where: PortfolioTransactionWhereUniqueInput
  }

  /**
   * PortfolioTransaction findUniqueOrThrow
   */
  export type PortfolioTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioTransaction
     */
    select?: PortfolioTransactionSelect<ExtArgs> | null
    /**
     * Filter, which PortfolioTransaction to fetch.
     */
    where: PortfolioTransactionWhereUniqueInput
  }

  /**
   * PortfolioTransaction findFirst
   */
  export type PortfolioTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioTransaction
     */
    select?: PortfolioTransactionSelect<ExtArgs> | null
    /**
     * Filter, which PortfolioTransaction to fetch.
     */
    where?: PortfolioTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioTransactions to fetch.
     */
    orderBy?: PortfolioTransactionOrderByWithRelationInput | PortfolioTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortfolioTransactions.
     */
    cursor?: PortfolioTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortfolioTransactions.
     */
    distinct?: PortfolioTransactionScalarFieldEnum | PortfolioTransactionScalarFieldEnum[]
  }

  /**
   * PortfolioTransaction findFirstOrThrow
   */
  export type PortfolioTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioTransaction
     */
    select?: PortfolioTransactionSelect<ExtArgs> | null
    /**
     * Filter, which PortfolioTransaction to fetch.
     */
    where?: PortfolioTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioTransactions to fetch.
     */
    orderBy?: PortfolioTransactionOrderByWithRelationInput | PortfolioTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortfolioTransactions.
     */
    cursor?: PortfolioTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortfolioTransactions.
     */
    distinct?: PortfolioTransactionScalarFieldEnum | PortfolioTransactionScalarFieldEnum[]
  }

  /**
   * PortfolioTransaction findMany
   */
  export type PortfolioTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioTransaction
     */
    select?: PortfolioTransactionSelect<ExtArgs> | null
    /**
     * Filter, which PortfolioTransactions to fetch.
     */
    where?: PortfolioTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioTransactions to fetch.
     */
    orderBy?: PortfolioTransactionOrderByWithRelationInput | PortfolioTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PortfolioTransactions.
     */
    cursor?: PortfolioTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioTransactions.
     */
    skip?: number
    distinct?: PortfolioTransactionScalarFieldEnum | PortfolioTransactionScalarFieldEnum[]
  }

  /**
   * PortfolioTransaction create
   */
  export type PortfolioTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioTransaction
     */
    select?: PortfolioTransactionSelect<ExtArgs> | null
    /**
     * The data needed to create a PortfolioTransaction.
     */
    data: XOR<PortfolioTransactionCreateInput, PortfolioTransactionUncheckedCreateInput>
  }

  /**
   * PortfolioTransaction createMany
   */
  export type PortfolioTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PortfolioTransactions.
     */
    data: PortfolioTransactionCreateManyInput | PortfolioTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PortfolioTransaction createManyAndReturn
   */
  export type PortfolioTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioTransaction
     */
    select?: PortfolioTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PortfolioTransactions.
     */
    data: PortfolioTransactionCreateManyInput | PortfolioTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PortfolioTransaction update
   */
  export type PortfolioTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioTransaction
     */
    select?: PortfolioTransactionSelect<ExtArgs> | null
    /**
     * The data needed to update a PortfolioTransaction.
     */
    data: XOR<PortfolioTransactionUpdateInput, PortfolioTransactionUncheckedUpdateInput>
    /**
     * Choose, which PortfolioTransaction to update.
     */
    where: PortfolioTransactionWhereUniqueInput
  }

  /**
   * PortfolioTransaction updateMany
   */
  export type PortfolioTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PortfolioTransactions.
     */
    data: XOR<PortfolioTransactionUpdateManyMutationInput, PortfolioTransactionUncheckedUpdateManyInput>
    /**
     * Filter which PortfolioTransactions to update
     */
    where?: PortfolioTransactionWhereInput
  }

  /**
   * PortfolioTransaction upsert
   */
  export type PortfolioTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioTransaction
     */
    select?: PortfolioTransactionSelect<ExtArgs> | null
    /**
     * The filter to search for the PortfolioTransaction to update in case it exists.
     */
    where: PortfolioTransactionWhereUniqueInput
    /**
     * In case the PortfolioTransaction found by the `where` argument doesn't exist, create a new PortfolioTransaction with this data.
     */
    create: XOR<PortfolioTransactionCreateInput, PortfolioTransactionUncheckedCreateInput>
    /**
     * In case the PortfolioTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PortfolioTransactionUpdateInput, PortfolioTransactionUncheckedUpdateInput>
  }

  /**
   * PortfolioTransaction delete
   */
  export type PortfolioTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioTransaction
     */
    select?: PortfolioTransactionSelect<ExtArgs> | null
    /**
     * Filter which PortfolioTransaction to delete.
     */
    where: PortfolioTransactionWhereUniqueInput
  }

  /**
   * PortfolioTransaction deleteMany
   */
  export type PortfolioTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortfolioTransactions to delete
     */
    where?: PortfolioTransactionWhereInput
  }

  /**
   * PortfolioTransaction without action
   */
  export type PortfolioTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioTransaction
     */
    select?: PortfolioTransactionSelect<ExtArgs> | null
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


  export const YieldOpportunityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    content: 'content',
    apy: 'apy',
    type: 'type',
    network: 'network',
    tokenSymbol: 'tokenSymbol',
    tokenAddress: 'tokenAddress',
    providerId: 'providerId',
    providerName: 'providerName',
    protocol: 'protocol',
    asset: 'asset',
    tvl: 'tvl',
    cooldownDays: 'cooldownDays',
    warmupDays: 'warmupDays',
    withdrawDays: 'withdrawDays',
    canEnter: 'canEnter',
    canExit: 'canExit',
    createdAt: 'createdAt',
    isAvailable: 'isAvailable',
    rewardType: 'rewardType',
    updatedAt: 'updatedAt'
  };

  export type YieldOpportunityScalarFieldEnum = (typeof YieldOpportunityScalarFieldEnum)[keyof typeof YieldOpportunityScalarFieldEnum]


  export const PortfolioPositionScalarFieldEnum: {
    id: 'id',
    yieldOpportunityId: 'yieldOpportunityId',
    amount: 'amount',
    entryDate: 'entryDate',
    lastModified: 'lastModified',
    currentApy: 'currentApy',
    isActive: 'isActive',
    exitTxHash: 'exitTxHash',
    entryTxHash: 'entryTxHash',
    tokenAddress: 'tokenAddress',
    tokenSymbol: 'tokenSymbol',
    walletAddress: 'walletAddress',
    integrationId: 'integrationId',
    lastBalanceSync: 'lastBalanceSync'
  };

  export type PortfolioPositionScalarFieldEnum = (typeof PortfolioPositionScalarFieldEnum)[keyof typeof PortfolioPositionScalarFieldEnum]


  export const PortfolioRebalanceScalarFieldEnum: {
    id: 'id',
    fromPositionId: 'fromPositionId',
    toPositionId: 'toPositionId',
    amount: 'amount',
    executedAt: 'executedAt',
    fromApy: 'fromApy',
    toApy: 'toApy',
    gasCost: 'gasCost',
    annualIncomeChange: 'annualIncomeChange'
  };

  export type PortfolioRebalanceScalarFieldEnum = (typeof PortfolioRebalanceScalarFieldEnum)[keyof typeof PortfolioRebalanceScalarFieldEnum]


  export const PortfolioTransactionScalarFieldEnum: {
    id: 'id',
    walletAddress: 'walletAddress',
    integrationId: 'integrationId',
    direction: 'direction',
    amount: 'amount',
    txHash: 'txHash',
    executedAt: 'executedAt'
  };

  export type PortfolioTransactionScalarFieldEnum = (typeof PortfolioTransactionScalarFieldEnum)[keyof typeof PortfolioTransactionScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'PortfolioDirection'
   */
  export type EnumPortfolioDirectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PortfolioDirection'>
    


  /**
   * Reference to a field of type 'PortfolioDirection[]'
   */
  export type ListEnumPortfolioDirectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PortfolioDirection[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    
  /**
   * Deep Input Types
   */


  export type YieldOpportunityWhereInput = {
    AND?: YieldOpportunityWhereInput | YieldOpportunityWhereInput[]
    OR?: YieldOpportunityWhereInput[]
    NOT?: YieldOpportunityWhereInput | YieldOpportunityWhereInput[]
    id?: StringFilter<"YieldOpportunity"> | string
    name?: StringFilter<"YieldOpportunity"> | string
    content?: StringNullableFilter<"YieldOpportunity"> | string | null
    apy?: FloatFilter<"YieldOpportunity"> | number
    type?: StringFilter<"YieldOpportunity"> | string
    network?: StringFilter<"YieldOpportunity"> | string
    tokenSymbol?: StringFilter<"YieldOpportunity"> | string
    tokenAddress?: StringNullableFilter<"YieldOpportunity"> | string | null
    providerId?: StringFilter<"YieldOpportunity"> | string
    providerName?: StringFilter<"YieldOpportunity"> | string
    protocol?: StringFilter<"YieldOpportunity"> | string
    asset?: StringFilter<"YieldOpportunity"> | string
    tvl?: FloatFilter<"YieldOpportunity"> | number
    cooldownDays?: IntNullableFilter<"YieldOpportunity"> | number | null
    warmupDays?: IntNullableFilter<"YieldOpportunity"> | number | null
    withdrawDays?: IntNullableFilter<"YieldOpportunity"> | number | null
    canEnter?: BoolFilter<"YieldOpportunity"> | boolean
    canExit?: BoolFilter<"YieldOpportunity"> | boolean
    createdAt?: DateTimeFilter<"YieldOpportunity"> | Date | string
    isAvailable?: BoolFilter<"YieldOpportunity"> | boolean
    rewardType?: StringFilter<"YieldOpportunity"> | string
    updatedAt?: DateTimeFilter<"YieldOpportunity"> | Date | string
  }

  export type YieldOpportunityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrderInput | SortOrder
    apy?: SortOrder
    type?: SortOrder
    network?: SortOrder
    tokenSymbol?: SortOrder
    tokenAddress?: SortOrderInput | SortOrder
    providerId?: SortOrder
    providerName?: SortOrder
    protocol?: SortOrder
    asset?: SortOrder
    tvl?: SortOrder
    cooldownDays?: SortOrderInput | SortOrder
    warmupDays?: SortOrderInput | SortOrder
    withdrawDays?: SortOrderInput | SortOrder
    canEnter?: SortOrder
    canExit?: SortOrder
    createdAt?: SortOrder
    isAvailable?: SortOrder
    rewardType?: SortOrder
    updatedAt?: SortOrder
  }

  export type YieldOpportunityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: YieldOpportunityWhereInput | YieldOpportunityWhereInput[]
    OR?: YieldOpportunityWhereInput[]
    NOT?: YieldOpportunityWhereInput | YieldOpportunityWhereInput[]
    name?: StringFilter<"YieldOpportunity"> | string
    content?: StringNullableFilter<"YieldOpportunity"> | string | null
    apy?: FloatFilter<"YieldOpportunity"> | number
    type?: StringFilter<"YieldOpportunity"> | string
    network?: StringFilter<"YieldOpportunity"> | string
    tokenSymbol?: StringFilter<"YieldOpportunity"> | string
    tokenAddress?: StringNullableFilter<"YieldOpportunity"> | string | null
    providerId?: StringFilter<"YieldOpportunity"> | string
    providerName?: StringFilter<"YieldOpportunity"> | string
    protocol?: StringFilter<"YieldOpportunity"> | string
    asset?: StringFilter<"YieldOpportunity"> | string
    tvl?: FloatFilter<"YieldOpportunity"> | number
    cooldownDays?: IntNullableFilter<"YieldOpportunity"> | number | null
    warmupDays?: IntNullableFilter<"YieldOpportunity"> | number | null
    withdrawDays?: IntNullableFilter<"YieldOpportunity"> | number | null
    canEnter?: BoolFilter<"YieldOpportunity"> | boolean
    canExit?: BoolFilter<"YieldOpportunity"> | boolean
    createdAt?: DateTimeFilter<"YieldOpportunity"> | Date | string
    isAvailable?: BoolFilter<"YieldOpportunity"> | boolean
    rewardType?: StringFilter<"YieldOpportunity"> | string
    updatedAt?: DateTimeFilter<"YieldOpportunity"> | Date | string
  }, "id">

  export type YieldOpportunityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrderInput | SortOrder
    apy?: SortOrder
    type?: SortOrder
    network?: SortOrder
    tokenSymbol?: SortOrder
    tokenAddress?: SortOrderInput | SortOrder
    providerId?: SortOrder
    providerName?: SortOrder
    protocol?: SortOrder
    asset?: SortOrder
    tvl?: SortOrder
    cooldownDays?: SortOrderInput | SortOrder
    warmupDays?: SortOrderInput | SortOrder
    withdrawDays?: SortOrderInput | SortOrder
    canEnter?: SortOrder
    canExit?: SortOrder
    createdAt?: SortOrder
    isAvailable?: SortOrder
    rewardType?: SortOrder
    updatedAt?: SortOrder
    _count?: YieldOpportunityCountOrderByAggregateInput
    _avg?: YieldOpportunityAvgOrderByAggregateInput
    _max?: YieldOpportunityMaxOrderByAggregateInput
    _min?: YieldOpportunityMinOrderByAggregateInput
    _sum?: YieldOpportunitySumOrderByAggregateInput
  }

  export type YieldOpportunityScalarWhereWithAggregatesInput = {
    AND?: YieldOpportunityScalarWhereWithAggregatesInput | YieldOpportunityScalarWhereWithAggregatesInput[]
    OR?: YieldOpportunityScalarWhereWithAggregatesInput[]
    NOT?: YieldOpportunityScalarWhereWithAggregatesInput | YieldOpportunityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"YieldOpportunity"> | string
    name?: StringWithAggregatesFilter<"YieldOpportunity"> | string
    content?: StringNullableWithAggregatesFilter<"YieldOpportunity"> | string | null
    apy?: FloatWithAggregatesFilter<"YieldOpportunity"> | number
    type?: StringWithAggregatesFilter<"YieldOpportunity"> | string
    network?: StringWithAggregatesFilter<"YieldOpportunity"> | string
    tokenSymbol?: StringWithAggregatesFilter<"YieldOpportunity"> | string
    tokenAddress?: StringNullableWithAggregatesFilter<"YieldOpportunity"> | string | null
    providerId?: StringWithAggregatesFilter<"YieldOpportunity"> | string
    providerName?: StringWithAggregatesFilter<"YieldOpportunity"> | string
    protocol?: StringWithAggregatesFilter<"YieldOpportunity"> | string
    asset?: StringWithAggregatesFilter<"YieldOpportunity"> | string
    tvl?: FloatWithAggregatesFilter<"YieldOpportunity"> | number
    cooldownDays?: IntNullableWithAggregatesFilter<"YieldOpportunity"> | number | null
    warmupDays?: IntNullableWithAggregatesFilter<"YieldOpportunity"> | number | null
    withdrawDays?: IntNullableWithAggregatesFilter<"YieldOpportunity"> | number | null
    canEnter?: BoolWithAggregatesFilter<"YieldOpportunity"> | boolean
    canExit?: BoolWithAggregatesFilter<"YieldOpportunity"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"YieldOpportunity"> | Date | string
    isAvailable?: BoolWithAggregatesFilter<"YieldOpportunity"> | boolean
    rewardType?: StringWithAggregatesFilter<"YieldOpportunity"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"YieldOpportunity"> | Date | string
  }

  export type PortfolioPositionWhereInput = {
    AND?: PortfolioPositionWhereInput | PortfolioPositionWhereInput[]
    OR?: PortfolioPositionWhereInput[]
    NOT?: PortfolioPositionWhereInput | PortfolioPositionWhereInput[]
    id?: StringFilter<"PortfolioPosition"> | string
    yieldOpportunityId?: StringFilter<"PortfolioPosition"> | string
    amount?: FloatFilter<"PortfolioPosition"> | number
    entryDate?: DateTimeFilter<"PortfolioPosition"> | Date | string
    lastModified?: DateTimeFilter<"PortfolioPosition"> | Date | string
    currentApy?: FloatFilter<"PortfolioPosition"> | number
    isActive?: BoolFilter<"PortfolioPosition"> | boolean
    exitTxHash?: StringNullableFilter<"PortfolioPosition"> | string | null
    entryTxHash?: StringNullableFilter<"PortfolioPosition"> | string | null
    tokenAddress?: StringNullableFilter<"PortfolioPosition"> | string | null
    tokenSymbol?: StringFilter<"PortfolioPosition"> | string
    walletAddress?: StringFilter<"PortfolioPosition"> | string
    integrationId?: StringFilter<"PortfolioPosition"> | string
    lastBalanceSync?: DateTimeNullableFilter<"PortfolioPosition"> | Date | string | null
  }

  export type PortfolioPositionOrderByWithRelationInput = {
    id?: SortOrder
    yieldOpportunityId?: SortOrder
    amount?: SortOrder
    entryDate?: SortOrder
    lastModified?: SortOrder
    currentApy?: SortOrder
    isActive?: SortOrder
    exitTxHash?: SortOrderInput | SortOrder
    entryTxHash?: SortOrderInput | SortOrder
    tokenAddress?: SortOrderInput | SortOrder
    tokenSymbol?: SortOrder
    walletAddress?: SortOrder
    integrationId?: SortOrder
    lastBalanceSync?: SortOrderInput | SortOrder
  }

  export type PortfolioPositionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    walletAddress_integrationId?: PortfolioPositionWalletAddressIntegrationIdCompoundUniqueInput
    AND?: PortfolioPositionWhereInput | PortfolioPositionWhereInput[]
    OR?: PortfolioPositionWhereInput[]
    NOT?: PortfolioPositionWhereInput | PortfolioPositionWhereInput[]
    yieldOpportunityId?: StringFilter<"PortfolioPosition"> | string
    amount?: FloatFilter<"PortfolioPosition"> | number
    entryDate?: DateTimeFilter<"PortfolioPosition"> | Date | string
    lastModified?: DateTimeFilter<"PortfolioPosition"> | Date | string
    currentApy?: FloatFilter<"PortfolioPosition"> | number
    isActive?: BoolFilter<"PortfolioPosition"> | boolean
    exitTxHash?: StringNullableFilter<"PortfolioPosition"> | string | null
    entryTxHash?: StringNullableFilter<"PortfolioPosition"> | string | null
    tokenAddress?: StringNullableFilter<"PortfolioPosition"> | string | null
    tokenSymbol?: StringFilter<"PortfolioPosition"> | string
    walletAddress?: StringFilter<"PortfolioPosition"> | string
    integrationId?: StringFilter<"PortfolioPosition"> | string
    lastBalanceSync?: DateTimeNullableFilter<"PortfolioPosition"> | Date | string | null
  }, "id" | "walletAddress_integrationId">

  export type PortfolioPositionOrderByWithAggregationInput = {
    id?: SortOrder
    yieldOpportunityId?: SortOrder
    amount?: SortOrder
    entryDate?: SortOrder
    lastModified?: SortOrder
    currentApy?: SortOrder
    isActive?: SortOrder
    exitTxHash?: SortOrderInput | SortOrder
    entryTxHash?: SortOrderInput | SortOrder
    tokenAddress?: SortOrderInput | SortOrder
    tokenSymbol?: SortOrder
    walletAddress?: SortOrder
    integrationId?: SortOrder
    lastBalanceSync?: SortOrderInput | SortOrder
    _count?: PortfolioPositionCountOrderByAggregateInput
    _avg?: PortfolioPositionAvgOrderByAggregateInput
    _max?: PortfolioPositionMaxOrderByAggregateInput
    _min?: PortfolioPositionMinOrderByAggregateInput
    _sum?: PortfolioPositionSumOrderByAggregateInput
  }

  export type PortfolioPositionScalarWhereWithAggregatesInput = {
    AND?: PortfolioPositionScalarWhereWithAggregatesInput | PortfolioPositionScalarWhereWithAggregatesInput[]
    OR?: PortfolioPositionScalarWhereWithAggregatesInput[]
    NOT?: PortfolioPositionScalarWhereWithAggregatesInput | PortfolioPositionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PortfolioPosition"> | string
    yieldOpportunityId?: StringWithAggregatesFilter<"PortfolioPosition"> | string
    amount?: FloatWithAggregatesFilter<"PortfolioPosition"> | number
    entryDate?: DateTimeWithAggregatesFilter<"PortfolioPosition"> | Date | string
    lastModified?: DateTimeWithAggregatesFilter<"PortfolioPosition"> | Date | string
    currentApy?: FloatWithAggregatesFilter<"PortfolioPosition"> | number
    isActive?: BoolWithAggregatesFilter<"PortfolioPosition"> | boolean
    exitTxHash?: StringNullableWithAggregatesFilter<"PortfolioPosition"> | string | null
    entryTxHash?: StringNullableWithAggregatesFilter<"PortfolioPosition"> | string | null
    tokenAddress?: StringNullableWithAggregatesFilter<"PortfolioPosition"> | string | null
    tokenSymbol?: StringWithAggregatesFilter<"PortfolioPosition"> | string
    walletAddress?: StringWithAggregatesFilter<"PortfolioPosition"> | string
    integrationId?: StringWithAggregatesFilter<"PortfolioPosition"> | string
    lastBalanceSync?: DateTimeNullableWithAggregatesFilter<"PortfolioPosition"> | Date | string | null
  }

  export type PortfolioRebalanceWhereInput = {
    AND?: PortfolioRebalanceWhereInput | PortfolioRebalanceWhereInput[]
    OR?: PortfolioRebalanceWhereInput[]
    NOT?: PortfolioRebalanceWhereInput | PortfolioRebalanceWhereInput[]
    id?: StringFilter<"PortfolioRebalance"> | string
    fromPositionId?: StringFilter<"PortfolioRebalance"> | string
    toPositionId?: StringFilter<"PortfolioRebalance"> | string
    amount?: FloatFilter<"PortfolioRebalance"> | number
    executedAt?: DateTimeFilter<"PortfolioRebalance"> | Date | string
    fromApy?: FloatFilter<"PortfolioRebalance"> | number
    toApy?: FloatFilter<"PortfolioRebalance"> | number
    gasCost?: FloatFilter<"PortfolioRebalance"> | number
    annualIncomeChange?: FloatFilter<"PortfolioRebalance"> | number
  }

  export type PortfolioRebalanceOrderByWithRelationInput = {
    id?: SortOrder
    fromPositionId?: SortOrder
    toPositionId?: SortOrder
    amount?: SortOrder
    executedAt?: SortOrder
    fromApy?: SortOrder
    toApy?: SortOrder
    gasCost?: SortOrder
    annualIncomeChange?: SortOrder
  }

  export type PortfolioRebalanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PortfolioRebalanceWhereInput | PortfolioRebalanceWhereInput[]
    OR?: PortfolioRebalanceWhereInput[]
    NOT?: PortfolioRebalanceWhereInput | PortfolioRebalanceWhereInput[]
    fromPositionId?: StringFilter<"PortfolioRebalance"> | string
    toPositionId?: StringFilter<"PortfolioRebalance"> | string
    amount?: FloatFilter<"PortfolioRebalance"> | number
    executedAt?: DateTimeFilter<"PortfolioRebalance"> | Date | string
    fromApy?: FloatFilter<"PortfolioRebalance"> | number
    toApy?: FloatFilter<"PortfolioRebalance"> | number
    gasCost?: FloatFilter<"PortfolioRebalance"> | number
    annualIncomeChange?: FloatFilter<"PortfolioRebalance"> | number
  }, "id">

  export type PortfolioRebalanceOrderByWithAggregationInput = {
    id?: SortOrder
    fromPositionId?: SortOrder
    toPositionId?: SortOrder
    amount?: SortOrder
    executedAt?: SortOrder
    fromApy?: SortOrder
    toApy?: SortOrder
    gasCost?: SortOrder
    annualIncomeChange?: SortOrder
    _count?: PortfolioRebalanceCountOrderByAggregateInput
    _avg?: PortfolioRebalanceAvgOrderByAggregateInput
    _max?: PortfolioRebalanceMaxOrderByAggregateInput
    _min?: PortfolioRebalanceMinOrderByAggregateInput
    _sum?: PortfolioRebalanceSumOrderByAggregateInput
  }

  export type PortfolioRebalanceScalarWhereWithAggregatesInput = {
    AND?: PortfolioRebalanceScalarWhereWithAggregatesInput | PortfolioRebalanceScalarWhereWithAggregatesInput[]
    OR?: PortfolioRebalanceScalarWhereWithAggregatesInput[]
    NOT?: PortfolioRebalanceScalarWhereWithAggregatesInput | PortfolioRebalanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PortfolioRebalance"> | string
    fromPositionId?: StringWithAggregatesFilter<"PortfolioRebalance"> | string
    toPositionId?: StringWithAggregatesFilter<"PortfolioRebalance"> | string
    amount?: FloatWithAggregatesFilter<"PortfolioRebalance"> | number
    executedAt?: DateTimeWithAggregatesFilter<"PortfolioRebalance"> | Date | string
    fromApy?: FloatWithAggregatesFilter<"PortfolioRebalance"> | number
    toApy?: FloatWithAggregatesFilter<"PortfolioRebalance"> | number
    gasCost?: FloatWithAggregatesFilter<"PortfolioRebalance"> | number
    annualIncomeChange?: FloatWithAggregatesFilter<"PortfolioRebalance"> | number
  }

  export type PortfolioTransactionWhereInput = {
    AND?: PortfolioTransactionWhereInput | PortfolioTransactionWhereInput[]
    OR?: PortfolioTransactionWhereInput[]
    NOT?: PortfolioTransactionWhereInput | PortfolioTransactionWhereInput[]
    id?: StringFilter<"PortfolioTransaction"> | string
    walletAddress?: StringFilter<"PortfolioTransaction"> | string
    integrationId?: StringFilter<"PortfolioTransaction"> | string
    direction?: EnumPortfolioDirectionFilter<"PortfolioTransaction"> | $Enums.PortfolioDirection
    amount?: DecimalFilter<"PortfolioTransaction"> | Decimal | DecimalJsLike | number | string
    txHash?: StringFilter<"PortfolioTransaction"> | string
    executedAt?: DateTimeFilter<"PortfolioTransaction"> | Date | string
  }

  export type PortfolioTransactionOrderByWithRelationInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    integrationId?: SortOrder
    direction?: SortOrder
    amount?: SortOrder
    txHash?: SortOrder
    executedAt?: SortOrder
  }

  export type PortfolioTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    txHash?: string
    AND?: PortfolioTransactionWhereInput | PortfolioTransactionWhereInput[]
    OR?: PortfolioTransactionWhereInput[]
    NOT?: PortfolioTransactionWhereInput | PortfolioTransactionWhereInput[]
    walletAddress?: StringFilter<"PortfolioTransaction"> | string
    integrationId?: StringFilter<"PortfolioTransaction"> | string
    direction?: EnumPortfolioDirectionFilter<"PortfolioTransaction"> | $Enums.PortfolioDirection
    amount?: DecimalFilter<"PortfolioTransaction"> | Decimal | DecimalJsLike | number | string
    executedAt?: DateTimeFilter<"PortfolioTransaction"> | Date | string
  }, "id" | "txHash">

  export type PortfolioTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    integrationId?: SortOrder
    direction?: SortOrder
    amount?: SortOrder
    txHash?: SortOrder
    executedAt?: SortOrder
    _count?: PortfolioTransactionCountOrderByAggregateInput
    _avg?: PortfolioTransactionAvgOrderByAggregateInput
    _max?: PortfolioTransactionMaxOrderByAggregateInput
    _min?: PortfolioTransactionMinOrderByAggregateInput
    _sum?: PortfolioTransactionSumOrderByAggregateInput
  }

  export type PortfolioTransactionScalarWhereWithAggregatesInput = {
    AND?: PortfolioTransactionScalarWhereWithAggregatesInput | PortfolioTransactionScalarWhereWithAggregatesInput[]
    OR?: PortfolioTransactionScalarWhereWithAggregatesInput[]
    NOT?: PortfolioTransactionScalarWhereWithAggregatesInput | PortfolioTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PortfolioTransaction"> | string
    walletAddress?: StringWithAggregatesFilter<"PortfolioTransaction"> | string
    integrationId?: StringWithAggregatesFilter<"PortfolioTransaction"> | string
    direction?: EnumPortfolioDirectionWithAggregatesFilter<"PortfolioTransaction"> | $Enums.PortfolioDirection
    amount?: DecimalWithAggregatesFilter<"PortfolioTransaction"> | Decimal | DecimalJsLike | number | string
    txHash?: StringWithAggregatesFilter<"PortfolioTransaction"> | string
    executedAt?: DateTimeWithAggregatesFilter<"PortfolioTransaction"> | Date | string
  }

  export type YieldOpportunityCreateInput = {
    id: string
    name: string
    content?: string | null
    apy: number
    type: string
    network: string
    tokenSymbol: string
    tokenAddress?: string | null
    providerId: string
    providerName: string
    protocol?: string
    asset?: string
    tvl?: number
    cooldownDays?: number | null
    warmupDays?: number | null
    withdrawDays?: number | null
    canEnter?: boolean
    canExit?: boolean
    createdAt?: Date | string
    isAvailable?: boolean
    rewardType: string
    updatedAt: Date | string
  }

  export type YieldOpportunityUncheckedCreateInput = {
    id: string
    name: string
    content?: string | null
    apy: number
    type: string
    network: string
    tokenSymbol: string
    tokenAddress?: string | null
    providerId: string
    providerName: string
    protocol?: string
    asset?: string
    tvl?: number
    cooldownDays?: number | null
    warmupDays?: number | null
    withdrawDays?: number | null
    canEnter?: boolean
    canExit?: boolean
    createdAt?: Date | string
    isAvailable?: boolean
    rewardType: string
    updatedAt: Date | string
  }

  export type YieldOpportunityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    apy?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    network?: StringFieldUpdateOperationsInput | string
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    tokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: StringFieldUpdateOperationsInput | string
    providerName?: StringFieldUpdateOperationsInput | string
    protocol?: StringFieldUpdateOperationsInput | string
    asset?: StringFieldUpdateOperationsInput | string
    tvl?: FloatFieldUpdateOperationsInput | number
    cooldownDays?: NullableIntFieldUpdateOperationsInput | number | null
    warmupDays?: NullableIntFieldUpdateOperationsInput | number | null
    withdrawDays?: NullableIntFieldUpdateOperationsInput | number | null
    canEnter?: BoolFieldUpdateOperationsInput | boolean
    canExit?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    rewardType?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YieldOpportunityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    apy?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    network?: StringFieldUpdateOperationsInput | string
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    tokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: StringFieldUpdateOperationsInput | string
    providerName?: StringFieldUpdateOperationsInput | string
    protocol?: StringFieldUpdateOperationsInput | string
    asset?: StringFieldUpdateOperationsInput | string
    tvl?: FloatFieldUpdateOperationsInput | number
    cooldownDays?: NullableIntFieldUpdateOperationsInput | number | null
    warmupDays?: NullableIntFieldUpdateOperationsInput | number | null
    withdrawDays?: NullableIntFieldUpdateOperationsInput | number | null
    canEnter?: BoolFieldUpdateOperationsInput | boolean
    canExit?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    rewardType?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YieldOpportunityCreateManyInput = {
    id: string
    name: string
    content?: string | null
    apy: number
    type: string
    network: string
    tokenSymbol: string
    tokenAddress?: string | null
    providerId: string
    providerName: string
    protocol?: string
    asset?: string
    tvl?: number
    cooldownDays?: number | null
    warmupDays?: number | null
    withdrawDays?: number | null
    canEnter?: boolean
    canExit?: boolean
    createdAt?: Date | string
    isAvailable?: boolean
    rewardType: string
    updatedAt: Date | string
  }

  export type YieldOpportunityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    apy?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    network?: StringFieldUpdateOperationsInput | string
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    tokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: StringFieldUpdateOperationsInput | string
    providerName?: StringFieldUpdateOperationsInput | string
    protocol?: StringFieldUpdateOperationsInput | string
    asset?: StringFieldUpdateOperationsInput | string
    tvl?: FloatFieldUpdateOperationsInput | number
    cooldownDays?: NullableIntFieldUpdateOperationsInput | number | null
    warmupDays?: NullableIntFieldUpdateOperationsInput | number | null
    withdrawDays?: NullableIntFieldUpdateOperationsInput | number | null
    canEnter?: BoolFieldUpdateOperationsInput | boolean
    canExit?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    rewardType?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YieldOpportunityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    apy?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    network?: StringFieldUpdateOperationsInput | string
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    tokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: StringFieldUpdateOperationsInput | string
    providerName?: StringFieldUpdateOperationsInput | string
    protocol?: StringFieldUpdateOperationsInput | string
    asset?: StringFieldUpdateOperationsInput | string
    tvl?: FloatFieldUpdateOperationsInput | number
    cooldownDays?: NullableIntFieldUpdateOperationsInput | number | null
    warmupDays?: NullableIntFieldUpdateOperationsInput | number | null
    withdrawDays?: NullableIntFieldUpdateOperationsInput | number | null
    canEnter?: BoolFieldUpdateOperationsInput | boolean
    canExit?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    rewardType?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioPositionCreateInput = {
    id: string
    yieldOpportunityId: string
    amount: number
    entryDate: Date | string
    lastModified?: Date | string
    currentApy: number
    isActive?: boolean
    exitTxHash?: string | null
    entryTxHash?: string | null
    tokenAddress?: string | null
    tokenSymbol: string
    walletAddress: string
    integrationId: string
    lastBalanceSync?: Date | string | null
  }

  export type PortfolioPositionUncheckedCreateInput = {
    id: string
    yieldOpportunityId: string
    amount: number
    entryDate: Date | string
    lastModified?: Date | string
    currentApy: number
    isActive?: boolean
    exitTxHash?: string | null
    entryTxHash?: string | null
    tokenAddress?: string | null
    tokenSymbol: string
    walletAddress: string
    integrationId: string
    lastBalanceSync?: Date | string | null
  }

  export type PortfolioPositionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    yieldOpportunityId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    currentApy?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    exitTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    entryTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    tokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    integrationId?: StringFieldUpdateOperationsInput | string
    lastBalanceSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PortfolioPositionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    yieldOpportunityId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    currentApy?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    exitTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    entryTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    tokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    integrationId?: StringFieldUpdateOperationsInput | string
    lastBalanceSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PortfolioPositionCreateManyInput = {
    id: string
    yieldOpportunityId: string
    amount: number
    entryDate: Date | string
    lastModified?: Date | string
    currentApy: number
    isActive?: boolean
    exitTxHash?: string | null
    entryTxHash?: string | null
    tokenAddress?: string | null
    tokenSymbol: string
    walletAddress: string
    integrationId: string
    lastBalanceSync?: Date | string | null
  }

  export type PortfolioPositionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    yieldOpportunityId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    currentApy?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    exitTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    entryTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    tokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    integrationId?: StringFieldUpdateOperationsInput | string
    lastBalanceSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PortfolioPositionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    yieldOpportunityId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    currentApy?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    exitTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    entryTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    tokenAddress?: NullableStringFieldUpdateOperationsInput | string | null
    tokenSymbol?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    integrationId?: StringFieldUpdateOperationsInput | string
    lastBalanceSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PortfolioRebalanceCreateInput = {
    id: string
    fromPositionId: string
    toPositionId: string
    amount: number
    executedAt: Date | string
    fromApy: number
    toApy: number
    gasCost: number
    annualIncomeChange: number
  }

  export type PortfolioRebalanceUncheckedCreateInput = {
    id: string
    fromPositionId: string
    toPositionId: string
    amount: number
    executedAt: Date | string
    fromApy: number
    toApy: number
    gasCost: number
    annualIncomeChange: number
  }

  export type PortfolioRebalanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromPositionId?: StringFieldUpdateOperationsInput | string
    toPositionId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromApy?: FloatFieldUpdateOperationsInput | number
    toApy?: FloatFieldUpdateOperationsInput | number
    gasCost?: FloatFieldUpdateOperationsInput | number
    annualIncomeChange?: FloatFieldUpdateOperationsInput | number
  }

  export type PortfolioRebalanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromPositionId?: StringFieldUpdateOperationsInput | string
    toPositionId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromApy?: FloatFieldUpdateOperationsInput | number
    toApy?: FloatFieldUpdateOperationsInput | number
    gasCost?: FloatFieldUpdateOperationsInput | number
    annualIncomeChange?: FloatFieldUpdateOperationsInput | number
  }

  export type PortfolioRebalanceCreateManyInput = {
    id: string
    fromPositionId: string
    toPositionId: string
    amount: number
    executedAt: Date | string
    fromApy: number
    toApy: number
    gasCost: number
    annualIncomeChange: number
  }

  export type PortfolioRebalanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromPositionId?: StringFieldUpdateOperationsInput | string
    toPositionId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromApy?: FloatFieldUpdateOperationsInput | number
    toApy?: FloatFieldUpdateOperationsInput | number
    gasCost?: FloatFieldUpdateOperationsInput | number
    annualIncomeChange?: FloatFieldUpdateOperationsInput | number
  }

  export type PortfolioRebalanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromPositionId?: StringFieldUpdateOperationsInput | string
    toPositionId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromApy?: FloatFieldUpdateOperationsInput | number
    toApy?: FloatFieldUpdateOperationsInput | number
    gasCost?: FloatFieldUpdateOperationsInput | number
    annualIncomeChange?: FloatFieldUpdateOperationsInput | number
  }

  export type PortfolioTransactionCreateInput = {
    id?: string
    walletAddress: string
    integrationId: string
    direction: $Enums.PortfolioDirection
    amount: Decimal | DecimalJsLike | number | string
    txHash: string
    executedAt: Date | string
  }

  export type PortfolioTransactionUncheckedCreateInput = {
    id?: string
    walletAddress: string
    integrationId: string
    direction: $Enums.PortfolioDirection
    amount: Decimal | DecimalJsLike | number | string
    txHash: string
    executedAt: Date | string
  }

  export type PortfolioTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    integrationId?: StringFieldUpdateOperationsInput | string
    direction?: EnumPortfolioDirectionFieldUpdateOperationsInput | $Enums.PortfolioDirection
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    txHash?: StringFieldUpdateOperationsInput | string
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    integrationId?: StringFieldUpdateOperationsInput | string
    direction?: EnumPortfolioDirectionFieldUpdateOperationsInput | $Enums.PortfolioDirection
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    txHash?: StringFieldUpdateOperationsInput | string
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioTransactionCreateManyInput = {
    id?: string
    walletAddress: string
    integrationId: string
    direction: $Enums.PortfolioDirection
    amount: Decimal | DecimalJsLike | number | string
    txHash: string
    executedAt: Date | string
  }

  export type PortfolioTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    integrationId?: StringFieldUpdateOperationsInput | string
    direction?: EnumPortfolioDirectionFieldUpdateOperationsInput | $Enums.PortfolioDirection
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    txHash?: StringFieldUpdateOperationsInput | string
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    integrationId?: StringFieldUpdateOperationsInput | string
    direction?: EnumPortfolioDirectionFieldUpdateOperationsInput | $Enums.PortfolioDirection
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    txHash?: StringFieldUpdateOperationsInput | string
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
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
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type YieldOpportunityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    apy?: SortOrder
    type?: SortOrder
    network?: SortOrder
    tokenSymbol?: SortOrder
    tokenAddress?: SortOrder
    providerId?: SortOrder
    providerName?: SortOrder
    protocol?: SortOrder
    asset?: SortOrder
    tvl?: SortOrder
    cooldownDays?: SortOrder
    warmupDays?: SortOrder
    withdrawDays?: SortOrder
    canEnter?: SortOrder
    canExit?: SortOrder
    createdAt?: SortOrder
    isAvailable?: SortOrder
    rewardType?: SortOrder
    updatedAt?: SortOrder
  }

  export type YieldOpportunityAvgOrderByAggregateInput = {
    apy?: SortOrder
    tvl?: SortOrder
    cooldownDays?: SortOrder
    warmupDays?: SortOrder
    withdrawDays?: SortOrder
  }

  export type YieldOpportunityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    apy?: SortOrder
    type?: SortOrder
    network?: SortOrder
    tokenSymbol?: SortOrder
    tokenAddress?: SortOrder
    providerId?: SortOrder
    providerName?: SortOrder
    protocol?: SortOrder
    asset?: SortOrder
    tvl?: SortOrder
    cooldownDays?: SortOrder
    warmupDays?: SortOrder
    withdrawDays?: SortOrder
    canEnter?: SortOrder
    canExit?: SortOrder
    createdAt?: SortOrder
    isAvailable?: SortOrder
    rewardType?: SortOrder
    updatedAt?: SortOrder
  }

  export type YieldOpportunityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    apy?: SortOrder
    type?: SortOrder
    network?: SortOrder
    tokenSymbol?: SortOrder
    tokenAddress?: SortOrder
    providerId?: SortOrder
    providerName?: SortOrder
    protocol?: SortOrder
    asset?: SortOrder
    tvl?: SortOrder
    cooldownDays?: SortOrder
    warmupDays?: SortOrder
    withdrawDays?: SortOrder
    canEnter?: SortOrder
    canExit?: SortOrder
    createdAt?: SortOrder
    isAvailable?: SortOrder
    rewardType?: SortOrder
    updatedAt?: SortOrder
  }

  export type YieldOpportunitySumOrderByAggregateInput = {
    apy?: SortOrder
    tvl?: SortOrder
    cooldownDays?: SortOrder
    warmupDays?: SortOrder
    withdrawDays?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
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
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type PortfolioPositionWalletAddressIntegrationIdCompoundUniqueInput = {
    walletAddress: string
    integrationId: string
  }

  export type PortfolioPositionCountOrderByAggregateInput = {
    id?: SortOrder
    yieldOpportunityId?: SortOrder
    amount?: SortOrder
    entryDate?: SortOrder
    lastModified?: SortOrder
    currentApy?: SortOrder
    isActive?: SortOrder
    exitTxHash?: SortOrder
    entryTxHash?: SortOrder
    tokenAddress?: SortOrder
    tokenSymbol?: SortOrder
    walletAddress?: SortOrder
    integrationId?: SortOrder
    lastBalanceSync?: SortOrder
  }

  export type PortfolioPositionAvgOrderByAggregateInput = {
    amount?: SortOrder
    currentApy?: SortOrder
  }

  export type PortfolioPositionMaxOrderByAggregateInput = {
    id?: SortOrder
    yieldOpportunityId?: SortOrder
    amount?: SortOrder
    entryDate?: SortOrder
    lastModified?: SortOrder
    currentApy?: SortOrder
    isActive?: SortOrder
    exitTxHash?: SortOrder
    entryTxHash?: SortOrder
    tokenAddress?: SortOrder
    tokenSymbol?: SortOrder
    walletAddress?: SortOrder
    integrationId?: SortOrder
    lastBalanceSync?: SortOrder
  }

  export type PortfolioPositionMinOrderByAggregateInput = {
    id?: SortOrder
    yieldOpportunityId?: SortOrder
    amount?: SortOrder
    entryDate?: SortOrder
    lastModified?: SortOrder
    currentApy?: SortOrder
    isActive?: SortOrder
    exitTxHash?: SortOrder
    entryTxHash?: SortOrder
    tokenAddress?: SortOrder
    tokenSymbol?: SortOrder
    walletAddress?: SortOrder
    integrationId?: SortOrder
    lastBalanceSync?: SortOrder
  }

  export type PortfolioPositionSumOrderByAggregateInput = {
    amount?: SortOrder
    currentApy?: SortOrder
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

  export type PortfolioRebalanceCountOrderByAggregateInput = {
    id?: SortOrder
    fromPositionId?: SortOrder
    toPositionId?: SortOrder
    amount?: SortOrder
    executedAt?: SortOrder
    fromApy?: SortOrder
    toApy?: SortOrder
    gasCost?: SortOrder
    annualIncomeChange?: SortOrder
  }

  export type PortfolioRebalanceAvgOrderByAggregateInput = {
    amount?: SortOrder
    fromApy?: SortOrder
    toApy?: SortOrder
    gasCost?: SortOrder
    annualIncomeChange?: SortOrder
  }

  export type PortfolioRebalanceMaxOrderByAggregateInput = {
    id?: SortOrder
    fromPositionId?: SortOrder
    toPositionId?: SortOrder
    amount?: SortOrder
    executedAt?: SortOrder
    fromApy?: SortOrder
    toApy?: SortOrder
    gasCost?: SortOrder
    annualIncomeChange?: SortOrder
  }

  export type PortfolioRebalanceMinOrderByAggregateInput = {
    id?: SortOrder
    fromPositionId?: SortOrder
    toPositionId?: SortOrder
    amount?: SortOrder
    executedAt?: SortOrder
    fromApy?: SortOrder
    toApy?: SortOrder
    gasCost?: SortOrder
    annualIncomeChange?: SortOrder
  }

  export type PortfolioRebalanceSumOrderByAggregateInput = {
    amount?: SortOrder
    fromApy?: SortOrder
    toApy?: SortOrder
    gasCost?: SortOrder
    annualIncomeChange?: SortOrder
  }

  export type EnumPortfolioDirectionFilter<$PrismaModel = never> = {
    equals?: $Enums.PortfolioDirection | EnumPortfolioDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.PortfolioDirection[] | ListEnumPortfolioDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.PortfolioDirection[] | ListEnumPortfolioDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumPortfolioDirectionFilter<$PrismaModel> | $Enums.PortfolioDirection
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type PortfolioTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    integrationId?: SortOrder
    direction?: SortOrder
    amount?: SortOrder
    txHash?: SortOrder
    executedAt?: SortOrder
  }

  export type PortfolioTransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PortfolioTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    integrationId?: SortOrder
    direction?: SortOrder
    amount?: SortOrder
    txHash?: SortOrder
    executedAt?: SortOrder
  }

  export type PortfolioTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    integrationId?: SortOrder
    direction?: SortOrder
    amount?: SortOrder
    txHash?: SortOrder
    executedAt?: SortOrder
  }

  export type PortfolioTransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPortfolioDirectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PortfolioDirection | EnumPortfolioDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.PortfolioDirection[] | ListEnumPortfolioDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.PortfolioDirection[] | ListEnumPortfolioDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumPortfolioDirectionWithAggregatesFilter<$PrismaModel> | $Enums.PortfolioDirection
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPortfolioDirectionFilter<$PrismaModel>
    _max?: NestedEnumPortfolioDirectionFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumPortfolioDirectionFieldUpdateOperationsInput = {
    set?: $Enums.PortfolioDirection
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumPortfolioDirectionFilter<$PrismaModel = never> = {
    equals?: $Enums.PortfolioDirection | EnumPortfolioDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.PortfolioDirection[] | ListEnumPortfolioDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.PortfolioDirection[] | ListEnumPortfolioDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumPortfolioDirectionFilter<$PrismaModel> | $Enums.PortfolioDirection
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumPortfolioDirectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PortfolioDirection | EnumPortfolioDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.PortfolioDirection[] | ListEnumPortfolioDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.PortfolioDirection[] | ListEnumPortfolioDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumPortfolioDirectionWithAggregatesFilter<$PrismaModel> | $Enums.PortfolioDirection
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPortfolioDirectionFilter<$PrismaModel>
    _max?: NestedEnumPortfolioDirectionFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use YieldOpportunityDefaultArgs instead
     */
    export type YieldOpportunityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = YieldOpportunityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PortfolioPositionDefaultArgs instead
     */
    export type PortfolioPositionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PortfolioPositionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PortfolioRebalanceDefaultArgs instead
     */
    export type PortfolioRebalanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PortfolioRebalanceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PortfolioTransactionDefaultArgs instead
     */
    export type PortfolioTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PortfolioTransactionDefaultArgs<ExtArgs>

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